const WebSocket = require("ws");
const wsConnection = new WebSocket.Server({ port: 8080 });

const clients = new Set();

class User {
    constructor(connection) {
        this.connection = connection;
        this.name = null;
        this._channels = new Set();
    }

    loginChannel(channelName, username) {
        if (this.isLoggedIn(channelName)) {
            return;
        }

        this.name = username;
        this._channels.add(channelName);

        this.sendMessage(channelName, 'entered the room');
    }

    logoutChannel(channelName) {
        if (!this.isLoggedIn(channelName)) {
            return;
        }

        this.sendMessage(channelName, 'left the room');
        this._channels.delete(channelName);
    }

    isLoggedIn(channelName) {
        return this._channels.has(channelName);
    }

    sendMessage(channelName, messageText) {
        const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const date = new Date;
        const message = {
            channel: channelName,
            username: this.name,
            message: `${date.toLocaleString("ru", dateOptions)} ${this.name}: ${messageText}`
        };

        for (let client of clients) {
            if (client.isLoggedIn(channelName)) {
                client.connection.send(JSON.stringify(message));
            }
        }
    }
}

wsConnection.on("connection", ws => {
    const user = new User(ws);
    clients.add(user);

    user.connection.on("message", function(data) {
        const message = JSON.parse(data);

        switch (message.command) {
            case "login":
                user.loginChannel(message.channel, message.username);
                return;
            case "logout":
                user.logoutChannel(message.channel);
                return;
            case "sendMessage":
                user.sendMessage(message.channel, message.message);
                return;
            case "exitChat":
                clients.delete(user);
                return;
            default:
                ws.send("Unknown command");
                return;
        }
    });

    user.connection.on("close", function() {
        clients.delete(user);
    });

});
