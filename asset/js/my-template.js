var sidebar_wrapper = $('#user_online');
var chat_field = $('#sohbet');
var chat_name = $('div.chat_list').find('.chat_name');
var table_list_chat = $('table.list-chat');


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
        var list_chat = $('table.list-chat');
        var body = ``;
        $.each(data, function (i, v) {
            var status = ``;
            var cls = ``;
            if (v.status_room == `opened`) {
                status = `Online`
                cls = `text-success`
            } else {
                status = `Offline`
                cls = `text-danger`
            };

            body += `<tr>
                        <td>
                        <div class="form-check">
                        <i class="fa fa fa-circle ${cls} float-left" title="${status}" aria-hidden="true" style="margin: 5px 0 12px 12px; font-size:8px"></i> 
                        </div>
                        </td>
                        <td>
                        <p class="title">${v.name}</p>
                        </td>
                        <td class="td-actions text-right">
                            <button type="button" rel="tooltip" title="" class="btn btn-link detail" data-original-title="Edit Task" data-room="${v.room_id}" data-name="${v.name}">
                            <i class="fa fa-external-link-square-alt" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>`;
            console.log(v.name);

        });
        list_chat.html(body);

        $('button.detail').on('click', function () {
            let room = $(this).data('room');
            let name = $(this).data('name');
            // alert(room);

            // re join room
            socket.emit('cs join room', {
                room_id: room
            })
            // load conversation
            socket.emit('load conversation', {
                room_id: room
            });

            // Cookies set room active
            Cookies.set('room_active', room, {
                expires: 1
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
        let body = ``;
        let timestamp = moment(data.timestamp).format('LT');
        let message = data.message.replace(`\n`, `<br>`);
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
    },
    fetchtoTable: function (data, socket) {
        var table = $('table#visitor_table');
        var alert = $('#alert_visitor_table');
        if (data.length === 0) {
            alert.show();
            table.hide();
        } else {
            alert.hide();
            table.show();
            var row = "";
            $.each(data, function (i, v) {
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
                // alert(r_id);

                // emit join room
                socket.emit('cs join room', {
                    room_id: r_id
                });

                // set navbar menu_side to chat list
                Cookies.set('menu_side', 'chat_list', {
                    expires: 1
                });

                // Cookies set room active
                Cookies.set('room_active', r_id, {
                    expires: 1
                });

                // load conversation
                socket.emit('load conversation', {
                    room_id: r_id
                });

                template.check_menu(socket, cs);
            });
        }
    },
    check_menu: function (socket, cs) {
        let cookies_menu = Cookies.get('menu_side');
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


                switch ($(this).data('list_online')) {
                    case 'visitor_online':

                        socket.emit('visitor online');

                        break;
                    case 'chat_list':
                        socket.emit('chat list', cs.user_id);

                        socket.on('user left', () => {
                            socket.emit('chat list', cs.user_id);
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
    showNotification: function (type, message) {
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
    }
}