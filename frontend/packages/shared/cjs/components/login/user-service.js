"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfo = exports.login = void 0;
const apis_1 = require("../../apis");
const login = (params = {}) => {
    return apis_1.axios.post("/login", params);
};
exports.login = login;
const getUserInfo = (params = {}) => {
    return apis_1.axios.get("/userinfo", {
        params: Object.assign({}, params),
    });
};
exports.getUserInfo = getUserInfo;
//# sourceMappingURL=user-service.js.map