var sidebar_wrapper = $('#user_online');
var chat_field = $('#sohbet');
var chat_name = $('div.chat_list').find('.chat_name');
var table_list_chat = $('table.list-chat');
var form_chat = $('#form_chat');


// sound location
var sounds = ['../admin_livechat/asset/media/sound/notification.mp3', '../admin_livechat/asset/media/sound/Ping-sound.mp3', '../admin_livechat/asset/media/sound/notification.mp3'];

template = {
    // untuk list cs online
    getUserOnline: function (data) {
        // console.log(data);
        var body = "";
        $.each(data, function (i, v) {
            body += "<li class='active bg-success'>";
            body += "<a href=''>";
            body += "<p>" + v.name + "</p>";
            body += "</li>";
            // console.log(v.username);
        });
        sidebar_wrapper.html(body);
    },
    chatlist: function (socket, data) {
        // console.log(data);
        // var list_chat = $('table.list-chat');
        var body = ``;
        $.each(data.data, function (i, v) {
            var status = ``;
            var cls = ``;
            if (v.status_room == `opened`) {
                status = `Online`
                cls = `text-success`
            } else {
                status = `Offline`
                cls = `text-danger`
            };

            // check cookies notif
            var i = Cookies.get("notif_" + v.room_id);
            if (i > 0) {
                badge = i;
            } else {
                badge = ``;
            }
            let name = '';
            if (v.name.length >= 25) {
                name = $.trim(v.name).substr(0, 25) + ' ...';
            } else {
                name = v.name;
            }

            body += `<tr>
                        
                        <td>
                            
                            <p id="room_${v.room_id}" data-toggle="tooltip" title="${v.name}">
                                <i class="fa fa fa-circle ${cls} float-left" title="${status}" aria-hidden="true" style="margin: 7px 5px 12px 12px; font-size:8px"></i> 
                                ${name}
                                <span class="badge badge-info pull-right">${badge}</span>
                            </p>
                        </td>
                        <td class="td-actions text-right">
                            
                            <button type="button" rel="tooltip" title="" class="btn btn-link detail" data-original-title="Edit Task" data-room="${v.room_id}" data-name="${v.name}">
                            <i class="fa fa-external-link-square-alt" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>`;
            console.log(v.name);

        });
        $("table#listchat_" + data.id_product).html(body);

        $('button.detail').on('click', function () {
            var room = $(this).data('room');
            var name = $(this).data('name');

            // Cookies set room active
            Cookies.set('room_active', room, {
                expires: 1
            });

            // Unset Cookies notif
            Cookies.remove("notif_" + room);

            // Unset badge

            // re join room
            socket.emit('cs join room', {
                room_id: room
            })
            // load conversation
            socket.emit('load conversation', {
                room_id: room
            });

            table_list_chat.find('tr').each(function (index, element) {
                $(this).find('td.td-actions').find('i').addClass('fa-external-link-square-alt');
            });
            $(this).find('i').removeClass('fa-external-link-square-alt');
            $(this).find('i').addClass('fa-caret-square-down');
            chat_field.html('');
            chat_name.html(name);

        });

    },
    addtoBalon: function (data) {
        var body = ``;
        var timestamp = moment(data.timestamp).format('LT');
        var message = data.message;
        if (cs.username == data.username) {
            body += `
            <div class="balon1 p-2 m-0 position-relative" data-is="You - ${timestamp}">
                <a class="float-right">${message}</a>
            </div>`;
        } else {
            body += `
            <div class="balon2 p-2 m-0 position-relative" data-is="${data.username} - ${timestamp}">
                <a class="float-left sohbet2">${message}</a>
            </div>`;
        }
        chat_field.append(body);
        chat_field.animate({
            scrollTop: $(chat_field).prop("scrollHeight")
        }, 0);
    },
    fetchtoTable: function (datas, socket) {
        let table = $('table#product_' + datas.id);
        var alert = $('#alert_visitor_table_' + datas.id);
        if (datas.data.length === 0) {
            alert.show();
            table.hide();
        } else {
            alert.hide();
            table.show();
            var row = "";
            $.each(datas.data, function (i, v) {
                // console.log(v.name);
                row += "<tr>";
                row += "<td>" + v.name + "</td>";
                row += "<td>" + v.email + "</td>";
                row += "<td>" + v.telp + "</td>";
                row += "<td class='text-center'><button class='btn btn-sm btn-primary btn-simple btn-accept-chat' data-r_id=" + v.room_id + "><i class='fas fa-external-link-square-alt'></i> Accept Chat</button></td>";
                row += "</tr>";
            });

            table.find('tbody').html(row);

            // action button
            var btn_accept_chat = $('button.btn-accept-chat');
            btn_accept_chat.click(function (e) {
                e.preventDefault();
                var r_id = $(e.currentTarget).data('r_id');

                // emit join room
                socket.emit('cs join room', {
                    room_id: r_id
                });

                // set navbar menu_side to chat list
                Cookies.set('menu_side', 'chat_list', {
                    expires: 1
                });
                template.loadingModal('show');
                // Cookies set room active
                Cookies.set('room_active', r_id, {
                    expires: 1
                });

                // load conversation
                socket.emit('load conversation', {
                    room_id: r_id
                });
                template.loadingModal('hide');
                template.check_menu(socket, cs);

            });
        }
    },
    check_menu: function (socket, cs) {
        var cookies_menu = Cookies.get('menu_side');
        if (cookies_menu) {
            $('ul.nav-stacked').find('li.nav-item').find('a').removeClass('active');
            $('ul.nav-stacked').find('li.nav-item').find('a').each(function () {
                if ($(this).data('list_online') == cookies_menu) {
                    $(this).addClass('active');
                }
            });
        } else {
            $('ul.nav-stacked').find('li.nav-item').find("#visitor_online_menu").addClass('active');
            Cookies.set('menu_side', 'visitor_online', {
                expires: 1
            });
        }
        this.menu_nav(socket, cs);
    },
    menu_nav: function (socket, cs) {
        $('ul.nav-stacked').find('li.nav-item').find('a').each(function () {
            if ($(this).hasClass('active')) {
                Cookies.set('menu_side', $(this).data('list_online'), {
                    expires: 1
                });

                $(".content").show();
                $(".menu-cs").hide();
                $(".menu-cs." + $(this).data('list_online')).show('fast', 'swing');

                let product = Cookies.get(`product_${cs.user_id}`);

                switch ($(this).data('list_online')) {
                    case 'visitor_online':


                        // ulang product
                        $.each(JSON.parse(product), function (i, v) {
                            console.log(v.id);
                            socket.emit('customer product online', {
                                id: v.id
                            });
                        });
                        // socket.emit('visitor online');

                        break;
                    case 'chat_list':
                        // ulang product
                        $.each(JSON.parse(product), function (i, v) {
                            socket.emit('chat list', v.id);

                            socket.on('user left', () => {
                                socket.emit('chat list', v.id);
                            });
                        });
                        break;
                    case 'user_online':
                        socket.emit('user online');
                        break;
                    default:
                        break;
                }
            }
        });
    },
    // tampil notif
    showNotification: function (type, message, id) {
        // color = Math.floor((Math.random() * 4) + 1);
        types = ['primary', 'info', 'success', 'warning', 'danger'];
        icons = ['tim-icons icon-bell-55', 'tim-icons icon-bell-55', 'tim-icons icon-check-2', 'tim-icons icon-alert-circle-exc', 'tim-icons icon-alert-circle-exc']



        $.notify({
            icon: icons[type],
            message: message

        }, {
            type: types[type],
            timer: 100,
            placement: {
                from: 'top',
                align: 'right'
            }
        });

        // check cookies notif
        // var i = Cookies.get("notif_" + v.room_id);
        // if (i > 0) {
        //     badge = `<span class="badge badge-light">${i}</span>`;
        // } else {
        //     badge = ``;
        // }
        var i = Cookies.get("notif_" + id);

        // set badge
        $('#room_' + id).find('span.badge').html(i);
    },
    soundNotification: function (type) {
        var audio = new Audio(sounds[type]);
        audio.play();
    },
    // tampil loading modal
    // action `show`, `hide`
    loadingModal: function (action) {

        $.LoadingOverlay(action, {
            size: 50,
            maxSize: 60,
            minSize: 20
        });
    },


    // EVENT HANDLER
    send_chat: function (socket) {

        // alert(socket);
        var username = cs.username;
        var timestamp = moment();
        var text_message = form_chat.find('#text');
        var message = text_message.val();

        // check value message
        // sanitize whitespace
        if (message.trim() == '') {
            return false;
        }

        data = {
            username: username,
            message: message,
            timestamp: timestamp
        }

        // send to server
        socket.emit('new message', message);

        // clear text message
        text_message.val('');
        // create bubble to show in chat_field
        template.addtoBalon(data);
    }
}