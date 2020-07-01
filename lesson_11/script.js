const user = document.getElementById('user');
const channel = document.getElementById('channel');
const login = document.getElementById('login');
const logout = document.getElementById('logout');
const exit = document.getElementById('exit');
const text = document.getElementById('text');
const sendMessage = document.getElementById('send-message');

login.addEventListener('click', function (e) {
    const message = {
        command: 'login',
        channel: channel.value,
        username: user.value
    };

    socket.send(JSON.stringify(message));
});

logout.addEventListener('click', function (e) {
    const message = {
        command: 'logout',
        channel: channel.value
    };

    socket.send(JSON.stringify(message));
});

exit.addEventListener('click', function (e) {
    const message = {
        command: 'exitChat'
    };

    socket.send(JSON.stringify(message));
});

document.getElementById('send-message').addEventListener('click', function (e) {
    const message = {
        command: 'sendMessage',
        channel: channel.value,
        message: text.value
    };

    text.value = '';
    socket.send(JSON.stringify(message));
});
