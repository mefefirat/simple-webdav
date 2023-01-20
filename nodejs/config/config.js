const { AuthType } = require("webdav");
const config = {
   "webdav": {
       host: "http://10.15.0.2",
       authType: AuthType.Digest,
       username: "test",
       password: "test12345"
   }
}
module.exports = config;