"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxy = void 0;
const tslib_1 = require("tslib");
const http_proxy_1 = tslib_1.__importDefault(require("http-proxy"));
exports.proxy = http_proxy_1.default.createProxyServer({
    target: process.env.BACKEND_URL,
    autoRewrite: false,
});
//# sourceMappingURL=proxy.js.map