let socket = new WebSocket("ws://localhost:8080");

const messages = document.getElementById('messages');

function addMessage(data) {
    const message = JSON.parse(data);
    const p = document.createElement('p');

    p.innerHTML = message.message;
    messages.append(p);
}

socket.onopen = event => {
    console.log("Connection established", event);
};

socket.onmessage = event => {
    console.log("Message received: ", event.data);
    addMessage(event.data);
};

socket.onclose = event => {
    if (event.wasClean) {
        console.log("Closed correct", event.code);
    } else {
        console.log("Closed wrong", event.code);
    }
};
