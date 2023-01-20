const config = require('./config');
const { createClient } = require("webdav");

const client = createClient(config.webdav.host, {
    authType: config.webdav.authType,
    username: config.webdav.username,
    password: config.webdav.password
});

module.exports = client;