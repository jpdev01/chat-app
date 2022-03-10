var stompClient = null;

function Chat() {

    this.init = function() {
        this.connect();
        $("#js-messages").load("templates/chat/messages.html");
        $("#js-board").load("../templates/chat/create/board.html");
        bindSubmit();
    }

    this.connect = function() {
        var socket = new SockJS('/stomp-endpoint');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            setConnected(true);
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/greetings', function (greeting) {
                showGreeting(JSON.parse(greeting.body));
            });
        });
    }

    function sendName() {
        stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
    }

    function showGreeting(message) {
        $("#greetings").append("<tr><td>" + message.message + "</td></tr>");
    }

    var bindSubmit = function() {
        $("#js-board").on('submit', function (e) {
            e.preventDefault();
            sendName();
            this.val("oi");
        });
    }
}

function setConnected(connected) {
    $("#js-messages").load("templates/chat/messages.html");
    $("#js-board").load("../templates/chat/create/board.html");
//     $("#connect").prop("disabled", connected);
//     $("#disconnect").prop("disabled", !connected);
//     if (connected) {
//         $("#conversation").show();
//     }
//     else {
//         $("#conversation").hide();
//     }
//     $("#greetings").html("");
 }

// function connect() {
//     var socket = new SockJS('/stomp-endpoint');
//     stompClient = Stomp.over(socket);
//     stompClient.connect({}, function (frame) {
//         setConnected(true);
//         console.log('Connected: ' + frame);
//         stompClient.subscribe('/topic/greetings', function (greeting) {
//             showGreeting(JSON.parse(greeting.body));
//         });
//     });
// }
//
// function disconnect() {
//     if (stompClient !== null) {
//         stompClient.disconnect();
//     }
//     setConnected(false);
//     console.log("Disconnected");
// }
//
// function sendName() {
//     stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
// }

// function showGreeting(message) {
//         $("#greetings").append("<tr><td>" + message.message + "</td></tr>");
// }

$(function () {
    var chat = new Chat();
    chat.init();
    // $("form").on('submit', function (e) {
    //     e.preventDefault();
    // });
    //connect();
    //$( "#send" ).click(function() { sendName(); });
});
