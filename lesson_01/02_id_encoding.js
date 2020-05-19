function getHex(value, lenght) {
    return value.toString(16).padStart(lenght, '0');
}

const timestamp = Math.floor(Date.now() / 1000);
const cluster = 3;
const type = 15;
const user = 15188622;

const result = getHex(timestamp, 8) + getHex(cluster, 2) + getHex(type, 1) + getHex(user, 6);

alert(`ID - ${result}`);
