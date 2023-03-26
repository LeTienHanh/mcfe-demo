"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McfeAuth = void 0;
const tslib_1 = require("tslib");
const next_auth_1 = tslib_1.__importDefault(require("next-auth"));
const credentials_1 = tslib_1.__importDefault(require("next-auth/providers/credentials"));
const getDomainWithoutSubdomain = (url) => {
    const urlObj = new URL(url);
    const urlParts = urlObj.hostname.split(".");
    let domain = urlParts
        .slice(0)
        .slice(-(urlParts.length === 4 ? 3 : 2))
        .join(".");
    if (domain === "localhost") {
        return domain;
    }
    return "." + domain;
};
let useSecureCookies = process.env.NEXTAUTH_URL.startsWith("https://");
const cookiePrefix = useSecureCookies ? "__Secure-" : "";
const domain = getDomainWithoutSubdomain(process.env.NEXTAUTH_URL);
const cookies = {
    sessionToken: {
        name: `${cookiePrefix}next-auth.session-token`,
        options: {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            secure: useSecureCookies,
            domain,
        },
    },
};
const McfeAuth = ({ callbacks = {} } = {}) => {
    return function auth(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            res.setHeader("Cache-Control", "no-store, max-age=0");
            return yield (0, next_auth_1.default)(req, res, {
                debug: true,
                useSecureCookies,
                cookies,
                secret: "372e4e86a44ecf741373543efdbe574a",
                callbacks: Object.assign({ redirect({ baseUrl }) {
                        return tslib_1.__awaiter(this, void 0, void 0, function* () {
                            return baseUrl;
                        });
                    } }, callbacks),
                providers: [
                    (0, credentials_1.default)({
                        name: "credentials",
                        credentials: {
                            username: { label: "Username", type: "text" },
                            password: { label: "Password", type: "password" },
                        },
                        authorize(credentials) {
                            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                                //  const res = await fetch("http://localhost:5000/auth/login", {
                                //    method: "POST",
                                //    body: JSON.stringify(credentials),
                                //    headers: { "Content-Type": "application/json" },
                                //  });
                                //  const user = await res.json();
                                //  if (!user) return null;
                                //  return user;
                                try {
                                    const res = yield fetch("http://localhost:5000/auth/login", {
                                        method: "POST",
                                        body: JSON.stringify(credentials),
                                        headers: { "Content-Type": "application/json" },
                                    });
                                    const user = yield res.json();
                                    console.log(user);
                                }
                                catch (err) {
                                    console.error(err);
                                }
                                console.log(domain);
                                console.log(credentials);
                                if (!credentials) {
                                    return null;
                                }
                                return {
                                    id: credentials === null || credentials === void 0 ? void 0 : credentials.username,
                                    name: credentials === null || credentials === void 0 ? void 0 : credentials.username,
                                    password: credentials === null || credentials === void 0 ? void 0 : credentials.password,
                                };
                            });
                        },
                    }),
                ],
            });
        });
    };
};
exports.McfeAuth = McfeAuth;
//# sourceMappingURL=nextauth.js.map