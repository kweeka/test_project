var browser_sync = require("browser-sync");
var config = {
    server: {
        baseDir: "./www"
    },
    tunnel: false,
    port: 8080,
    single: true
};
browser_sync(config);