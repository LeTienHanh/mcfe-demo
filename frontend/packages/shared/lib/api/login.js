"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const server_1 = require("../server");
const LOGIN_ENDPOINT_PATH = "/auth/login";
exports.default = (req, res) => {
    req.url = LOGIN_ENDPOINT_PATH;
    server_1.proxy.web(req, res);
};
exports.config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};
//# sourceMappingURL=login.js.map