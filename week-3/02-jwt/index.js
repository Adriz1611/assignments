const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

function signJwt(username, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        return null;
    }

    if (password.length < 6) {
        return null;
    }

    const token = jwt.sign({ username, password }, jwtPassword);
    return token;
}

function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
        return true;
    } catch (error) {
        return false;
    }
}

function decodeJwt(token) {
    try {
        const decoded = jwt.decode(token);
        return decoded;
    } catch (error) {
        return false;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
