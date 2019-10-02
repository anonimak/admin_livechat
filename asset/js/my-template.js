var sidebar_wrapper = $('#user_online');
var chat_field = $('#sohbet');
var chat_name = $('div.chat_list').find('.chat_name');
var table_list_chat = $('table.list-chat');
var form_chat = $('#form_chat');
var card_header = $('#header-chat_list');
var card_footer = $('.card-footer');
var card_action = $('#chat-action');

let i_notif = 1;

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

            if(Cookies.get("room_active") == v.room_id){
                icon = `fa-caret-square-down`;
            } 
            else {
                icon = `fa-external-link-square-alt`;
            };

            body += `<tr>
                        
                        <td>
                            
                            <p class="room" data-id="${v.room_id}" data-toggle="tooltip" title="${v.name}">
                                <i class="fa fa fa-circle ${cls} float-left" title="${status}" aria-hidden="true" style="margin: 7px 5px 12px 12px; font-size:8px"></i> 
                                ${name}
                                <span class="badge badge-info pull-right">${badge}</span>
                            </p>
                        </td>
                        <td class="td-actions text-right">
                            
                            <button type="button" rel="tooltip" title="" class="btn btn-link detail" data-original-title="Edit Task" data-room="${v.room_id}" data-name="${v.name}">
                            <i class="fa ${icon}" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>`;
            // console.log(v.name);

        });

                        
        // button active list chat
        let button = $('.detail[data-room="'+Cookies.get("room_active")+'"]');
        // active list chat
        table_list_chat.find('tr').each(function () {
            $(this).find('td.td-actions').find('i').addClass('fa-external-link-square-alt');
        });
        button.find('i').removeClass('fa-external-link-square-alt');
        button.find('i').addClass('fa-caret-square-down');


        $("table#listchat_" + data.id_product).html(body);

        $('button.detail').on('click', function () {
            var room = $(this).data('room');
            var name = $(this).data('name');

            // show card footer
            card_header.show();
            card_footer.show();

            if(Cookies.get('room_active') == room){
                table_list_chat.find('tr').each(function (index, element) {
                    $(this).find('td.td-actions').find('i').addClass('fa-external-link-square-alt');
                });
                $(this).find('i').removeClass('fa-external-link-square-alt');
                $(this).find('i').addClass('fa-caret-square-down');
                return;
            }

            // Cookies set room active
            Cookies.set('room_active', room, {
                expires: 1
            });
            // Cookies set name active
            Cookies.set('name_active', name, {
                expires: 1
            });

            // Unset Cookies notif
            Cookies.remove("notif_" + room);

            // Unset badge
            i_notif = 1;
            $('.badge').html('');

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
    log: function (msg) {
        var body = ``;
        body += `
            <div class="balon2 p-2 m-0 position-relative" data-is="${msg}">
            </div>`;
        chat_field.append(body);
        chat_field.animate({
            scrollTop: $(chat_field).prop("scrollHeight")
        }, 0);
    },
    fetchtoTable: function (datas, socket) {
        let table = $('table#product_' + datas.id);
        var alert = $('#alert_visitor_table_' + datas.id);
        if (!Array.isArray(datas.data) || !datas.data.length) {
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
                row += "<td class='text-center'><button class='btn btn-sm btn-primary btn-simple btn-accept-chat' data-r_id=" + v.room_id + " data-name="+ v.name +"><i class='fas fa-external-link-square-alt'></i> Accept Chat</button></td>";
                row += "</tr>";
            });

            table.find('tbody').html(row);

            // action button
            let btn_accept_chat = $('button.btn-accept-chat');
            btn_accept_chat.click(function (e) {
                e.preventDefault();
                let r_id = $(e.currentTarget).data('r_id');
                let name = $(e.currentTarget).data('name');
                
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

                // Cookies set name active
                Cookies.set('name_active', name, {
                    expires: 1
                });

                // load conversation
                socket.emit('load conversation', {
                    room_id: r_id
                });
                template.loadingModal('hide');
                template.check_menu(socket, cs);
                
                // button active list chat
                let button = $('.detail[data-room="'+r_id+'"]');
                console.log("button",button);
                // active list chat
                table_list_chat.find('tr').each(function (index, element) {
                    $(this).find('td.td-actions').find('i').addClass('fa-external-link-square-alt');
                });
                button.find('i').removeClass('fa-external-link-square-alt');
                button.find('i').addClass('fa-caret-square-down');
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

                let product = JSON.parse(localStorage.getItem(`product_${cs.user_id}`));

                switch ($(this).data('list_online')) {
                    case 'visitor_online':
                        // ulang product
                        if(typeof product != 'undefined'){
                            $.each(product, function (i, v) {
                                // console.log(v.id);
                                socket.emit('customer product online', {
                                    id: v.id
                                });
                            });
                        }
                        // socket.emit('visitor online');

                        break;
                    case 'chat_list':
                        // ulang product
                        if(typeof product != 'undefined'){
                            $.each(product, function (i, v) {
                                socket.emit('chat list', v.id);

                                socket.on('user left', () => {
                                    socket.emit('chat list', v.id);
                                });
                            });
                        }

                        // check chat active
                        // hide card_footer
                        let room_active = Cookies.get("room_active");
                        if(typeof room_active == 'undefined'){
                            card_header.hide();
                            card_footer.hide();
                            chat_field.html(`
                            <div class="row justify-content-center align-items-center" style="margin: auto;">
                                <h4>Please select a chat to start messaging.</h4>
                            </div>
                            `);
                        } else {
                            // load conversation
                            socket.emit('load conversation', {
                                room_id: room_active
                            });
                            card_header.show();
                            card_footer.show();
                            chat_field.html('');
                            chat_name.html(Cookies.get('name_active'));
                        }
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
        $(`.room[data-id='${id}']`).find('span.badge').html(i);
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
        let room_active = Cookies.get("room_active");

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
        socket.emit('new message', {
            msg : message,
            room_id : room_active
        });

        // clear text message
        text_message.val('');
        // create bubble to show in chat_field
        template.addtoBalon(data);
        
        // save to array
        temp.export_to_txt(data);
    },


    // AJAX
    load_product: function (){

    $.get(`${BASEURL}Dashboards/getProductsbyCs/${cs.user_id}`, function (data) {
    
        // untuk nampung product

        let products = [];

        // console.log(data);

        // create table at here
        let tables = ``;
        let lists = ``;
        
        if(data[0].product_id != null){
            $.each(data, function (i, v) {
                tables += temp.table_create(v);
                lists += temp.listchat_create(v);
                product = {
                id: v.product_id,
                product_name: v.product_name
                };
                products.push(product);
            });
        }

  
        // save to cookies
        localStorage.setItem(`product_${cs.user_id}`, JSON.stringify(products));
        $('#table_visitor').append(tables);
        $('#listchat').append(lists);
  
  
        // tooltip
        $(document).ready(function () {
          $('[data-toggle="tooltip"]').tooltip();
        });
        
      }, 'json');
    }
}