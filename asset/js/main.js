temp = {
  table_create: (v) => {
    // console.log(v);
    let product_name = v.product_name.substr(0, 20) + ' ...';
    body = `
      <div class="card">
        <div class="card-header">
          <h6 class="title d-inline" data-toggle="tooltip" title="${v.product_name}">List Visitor Product ${product_name}</h6>
        </div>
        <div class="card-body">
          <div id="alert_visitor_table_${v.product_id}" class="alert alert-default text-center" role="alert" style="display:none">                     
            no visitors are online
          </div>              
          <div class="table-responsive">
            <table class="table tablesorter" id="product_${v.product_id}">
              <thead class=" text-primary">
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Email
                  </th>
                  <th>
                    Telp
                  </th>
                  <th class="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    return body;
  },
  listchat_create: (v) => {
    let product_name = v.product_name.substr(0, 20) + '. . . ';
    body = `
      <h5 data-toggle="collapse" data-target="#panel_${v.product_id}" data-toggle="tooltip" title="${v.product_name}"><i class="tim-icons icon-minimal-down pull-right"></i>
      ${product_name} (0)</h5>
      <div id="panel_${v.product_id}" class="table collapse">
        <table class="table" id="listchat_${v.product_id}">
          <tbody>
          </tbody>
        </table>
      </div>
    `;
    return body;
  }
};


$(function () {
  var FADE_TIME = 150; // ms
  var TYPING_TIMER_LENGTH = 400; // ms
  var COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];

  // Initialize variables
  var $window = $(window);
  var $usernameInput = $('.usernameInput'); // Input for username
  var $messages = $('.messages'); // Messages area
  var $inputMessage = $('.inputMessage'); // Input message input box

  var $loginPage = $('.login.page'); // The login page
  var $chatPage = $('.chat.page'); // The chatroom page

  // Prompt for setting a username
  var username;
  var connected = false;
  var typing = false;
  var lastTypingTime;
  var $currentInput = $usernameInput.focus();

  var socket = io.connect('http://1.1.1.17:3000');
  // var socket = io.connect('http://apps.cloudtech.id:3000');

  // Tell the server your username
  socket.emit('add user', cs);

  // Katakan ke server kalau butuh data user online
  // socket.emit('user online');

  var navlink_menu = $('a.nav-link.menu');
  navlink_menu.click(function (e) {
    e.preventDefault();
    Cookies.set('menu_side', $(this).data('list_online'), {
      expires: 1
    });
    template.check_menu(socket, cs);
  });

  // check cookie menu
  template.check_menu(socket, cs);


  socket.on('cs join', (data) => {
    console.log("oke");
  });

  // Socket events

  // Whenever the server emits 'login', log the login message
  socket.on('login', (data) => {
    connected = true;
    // Display the welcome message
    // var message = "Welcome to Socket.IO Chat – ";
    // log(message, {
    //   prepend: true
    // });
    // addParticipantsMessage(data);
  });

  let i = 1;
  // Whenever the server emits 'new message', update the chat body
  socket.on('new message', (data) => {
    // addChatMessage(data);
    let room_active = Cookies.get('room_active');
    alert(room_active);
    // let room_active = Cookies.get('room_active');

    // if (Cookies.get("notif_" + room_active)) {
    //   i = Cookies.get("notif_" + room_active);
    // }

    if (room_active == data.id) {
      template.addtoBalon(data);
    } else {
      // Cookies set notif badge
      Cookies.set('notif_' + data.id, i++);
      let count_notif = Cookies.get('notif_' + data.id);
      template.soundNotification(0);
      template.showNotification(1, count_notif + ' message from ' + data.username, data.id);

    }
  });

  // Whenever the server emits 'user joined', log it in the chat body
  socket.on('user joined', (data) => {
    // log(data.username + ' joined');
    // addParticipantsMessage(data);
  });

  // Whenever the server emits 'user left', log it in the chat body
  // socket.on('user left', (data) => {
  //   log(data.username + ' left');
  //   addParticipantsMessage(data);
  //   removeChatTyping(data);
  // });

  // Whenever the server emits 'typing', show the typing message
  // socket.on('typing', (data) => {
  //   addChatTyping(data);
  // });

  // Whenever the server emits 'stop typing', kill the typing message
  // socket.on('stop typing', (data) => {
  //   removeChatTyping(data);
  // });

  socket.on('disconnect', () => {
    alert('you have been disconnected');
  });

  socket.on('reconnect', () => {
    alert('you have been reconnected');
    if (cs.username) {
      socket.emit('add user', cs);
    }
  });

  socket.on('reconnect_error', () => {
    log('attempt to reconnect has failed');
  });

  socket.on('notification', () => {
    template.soundNotification(1);
  });

  // tambahanku

  // user handle
  socket.on('chat list', (data) => {
    template.chatlist(socket, data);
  });

  // socket.on('show user', (datas) => {
  //   setInterval(() => {
  //     socket.emit('user online');
  //   }, 5000);
  //   // console.log(datas);
  //   template.getUserOnline(datas);
  // });

  socket.on('show visitor', (datas) => {
    // alert('oke');
    // getUserOnline(datas);
    // template.loadingModal('show');
    template.fetchtoTable(datas, socket);
    // template.loadingModal('hide');
  });

  socket.on('data kosong', () => {
    alert('data kosong');
  });


  socket.on('load conversation', (data_conversation) => {
    // console.log(data_conversation);
    $.each(data_conversation, function (i, v) {
      template.addtoBalon(v);
      console.log(v);
    });
    chat_field.animate({
      scrollTop: $(chat_field).prop("scrollHeight")
    }, 0);
  });

  // send ajax
  // form chat
  var form_chat = $('#form_chat');
  var btn_send = form_chat.find("#btn_send");

  btn_send.on('click', function (e) {
    e.preventDefault();
    template.send_chat(socket);
  });

  socket.on('customer product list', (data) => {
    console.log(data);
    // tumpahin
    template.fetchtoTable(data, socket);
  });






  // AJAX HANDLER

  // get product handled by cs id
  $.get(`${BASEURL}Dashboards/getProductsbyCs/${cs.user_id}`, function (data) {

    // untuk nampung product

    let products = [];

    alert("Data Loaded: " + data);

    // create table at here
    let tables = ``;
    let lists = ``;

    $.each(data, function (i, v) {
      tables += temp.table_create(v);
      lists += temp.listchat_create(v);
      product = {
        id: v.product_id,
        product_name: v.product_name
      };
      products.push(product);
    });

    // save to cookies
    Cookies.set(`product_${cs.user_id}`, products);

    $('#table_visitor').append(tables);
    $('#listchat').append(lists);


    // tooltip
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

  }, 'json');


  // get list customer by product

});