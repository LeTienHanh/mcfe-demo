"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McfeAuth = void 0;
const tslib_1 = require("tslib");
const next_auth_1 = tslib_1.__importDefault(require("next-auth"));
const credentials_1 = tslib_1.__importDefault(require("next-auth/providers/credentials"));
exports.McfeAuth = (0, next_auth_1.default)({
    callbacks: {
        redirect({ url, baseUrl }) {
            console.log("redirect");
            console.log(baseUrl);
            console.log(url);
            return baseUrl;
        },
    },
    providers: [
        (0, credentials_1.default)({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize(credentials) {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    /*  const res = await fetch("/your/endpoint", {
                        method: "POST",
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" },
                      });
                      const user = await res.json(); */
                    console.log("authorize");
                    console.log(credentials);
                    if (!credentials) {
                        return null;
                    }
                    return {
                        id: credentials === null || credentials === void 0 ? void 0 : credentials.username,
                        password: credentials === null || credentials === void 0 ? void 0 : credentials.password,
                    };
                });
            },
        }),
    ],
});
//# sourceMappingURL=nextauth.js.map