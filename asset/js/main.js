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

  // const addParticipantsMessage = (data) => {
  //   var message = '';
  //   if (data.numUsers === 1) {
  //     message += "there's 1 participant";
  //   } else {
  //     message += "there are " + data.numUsers + " participants";
  //   }
  //   log(message);
  // }

  // // Sets the client's username
  // const setUsername = () => {
  //   username = cleanInput($usernameInput.val().trim());

  //   // If the username is valid
  //   if (username) {
  //     $loginPage.fadeOut();
  //     $chatPage.show();
  //     $loginPage.off('click');
  //     $currentInput = $inputMessage.focus();


  //     // // visitor
  //     // let visitor = {
  //     //   'username': username,
  //     //   'level': 'visitor'
  //     // };
  //   }
  // }

  // // Sends a chat message
  // const sendMessage = () => {
  //   var message = $inputMessage.val();
  //   // Prevent markup from being injected into the message
  //   message = cleanInput(message);
  //   // if there is a non-empty message and a socket connection
  //   if (message && connected) {
  //     $inputMessage.val('');
  //     addChatMessage({
  //       username: username,
  //       message: message
  //     });
  //     // tell server to execute 'new message' and send along one parameter
  //     socket.emit('new message', message);
  //   }
  // }

  // // Log a message
  // const log = (message, options) => {
  //   var $el = $('<li>').addClass('log').text(message);
  //   addMessageElement($el, options);
  // }

  // // Adds the visual chat message to the message list
  // const addChatMessage = (data, options) => {
  //   // Don't fade the message in if there is an 'X was typing'
  //   var $typingMessages = getTypingMessages(data);
  //   options = options || {};
  //   if ($typingMessages.length !== 0) {
  //     options.fade = false;
  //     $typingMessages.remove();
  //   }

  //   var $usernameDiv = $('<span class="username"/>')
  //     .text(data.username)
  //     .css('color', getUsernameColor(data.username));
  //   var $messageBodyDiv = $('<span class="messageBody">')
  //     .text(data.message);

  //   var typingClass = data.typing ? 'typing' : '';
  //   var $messageDiv = $('<li class="message"/>')
  //     .data('username', data.username)
  //     .addClass(typingClass)
  //     .append($usernameDiv, $messageBodyDiv);

  //   addMessageElement($messageDiv, options);
  // }

  // // Adds the visual chat typing message
  // const addChatTyping = (data) => {
  //   data.typing = true;
  //   data.message = 'is typing';
  //   addChatMessage(data);
  // }

  // // Removes the visual chat typing message
  // const removeChatTyping = (data) => {
  //   getTypingMessages(data).fadeOut(function () {
  //     $(this).remove();
  //   });
  // }

  // // Adds a message element to the messages and scrolls to the bottom
  // // el - The element to add as a message
  // // options.fade - If the element should fade-in (default = true)
  // // options.prepend - If the element should prepend
  // //   all other messages (default = false)
  // const addMessageElement = (el, options) => {
  //   var $el = $(el);

  //   // Setup default options
  //   if (!options) {
  //     options = {};
  //   }
  //   if (typeof options.fade === 'undefined') {
  //     options.fade = true;
  //   }
  //   if (typeof options.prepend === 'undefined') {
  //     options.prepend = false;
  //   }

  //   // Apply options
  //   if (options.fade) {
  //     $el.hide().fadeIn(FADE_TIME);
  //   }
  //   if (options.prepend) {
  //     $messages.prepend($el);
  //   } else {
  //     $messages.append($el);
  //   }
  //   $messages[0].scrollTop = $messages[0].scrollHeight;
  // }

  // // Prevents input from having injected markup
  // const cleanInput = (input) => {
  //   return $('<div/>').text(input).html();
  // }

  // // Updates the typing event
  // const updateTyping = () => {
  //   if (connected) {
  //     if (!typing) {
  //       typing = true;
  //       socket.emit('typing');
  //     }
  //     lastTypingTime = (new Date()).getTime();

  //     setTimeout(() => {
  //       var typingTimer = (new Date()).getTime();
  //       var timeDiff = typingTimer - lastTypingTime;
  //       if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
  //         socket.emit('stop typing');
  //         typing = false;
  //       }
  //     }, TYPING_TIMER_LENGTH);
  //   }
  // }

  // // Gets the 'X is typing' messages of a user
  // const getTypingMessages = (data) => {
  //   return $('.typing.message').filter(function (i) {
  //     return $(this).data('username') === data.username;
  //   });
  // }

  // // Gets the color of a username through our hash function
  // const getUsernameColor = (username) => {
  //   // Compute hash code
  //   var hash = 7;
  //   for (var i = 0; i < username.length; i++) {
  //     hash = username.charCodeAt(i) + (hash << 5) - hash;
  //   }
  //   // Calculate color
  //   var index = Math.abs(hash % COLORS.length);
  //   return COLORS[index];
  // }

  // // Keyboard events

  // $window.keydown(event => {
  //   // Auto-focus the current input when a key is typed
  //   if (!(event.ctrlKey || event.metaKey || event.altKey)) {
  //     $currentInput.focus();
  //   }
  //   // When the client hits ENTER on their keyboard
  //   if (event.which === 13) {
  //     if (username) {
  //       sendMessage();
  //       socket.emit('stop typing');
  //       typing = false;
  //     } else {
  //       setUsername();
  //     }
  //   }
  // });

  // $inputMessage.on('input', () => {
  //   updateTyping();
  // });

  // // Click events

  // // Focus input when clicking anywhere on login page
  // $loginPage.click(() => {
  //   $currentInput.focus();
  // });

  // // Focus input when clicking on the message input's border
  // $inputMessage.click(() => {
  //   $inputMessage.focus();
  // });

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
    // console.log(data);
    // socket.emit('chat list', cs.user_id);
    // socket.emit('chat list', cs.user_id);
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
});