"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authOptions = exports.McfeAuth = exports.defaultConfig = void 0;
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
exports.defaultConfig = {
    debug: true,
    useSecureCookies,
    cookies,
    secret: "372e4e86a44ecf741373543efdbe574a",
    callbacks: {
        redirect({ baseUrl }) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                return baseUrl;
            });
        },
        jwt({ token, user }) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (user) {
                    //@ts-ignore
                    token.user = user;
                    //@ts-ignore
                    token.access_token = user.access_token;
                }
                return token;
            });
        },
        session({ session = {}, token = {} }) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                //@ts-ignore
                session.access_token = token.access_token;
                //@ts-ignore
                session.user = token.user;
                return session;
            });
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
                    if (!credentials) {
                        return null;
                    }
                    try {
                        const res = yield fetch(`${process.env.BACKEND_URL}/auth/login`, {
                            method: "POST",
                            body: JSON.stringify(credentials),
                            headers: { "Content-Type": "application/json" },
                        });
                        const user = yield res.json();
                        return user;
                    }
                    catch (err) {
                        console.error(err);
                        return null;
                    }
                });
            },
        }),
    ],
};
let authOptions = exports.defaultConfig;
exports.authOptions = authOptions;
const McfeAuth = ({ callbacks = {} } = {}) => {
    return function auth(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            res.setHeader("Cache-Control", "no-store, max-age=0");
            exports.authOptions = authOptions = Object.assign(Object.assign({}, exports.defaultConfig), { callbacks: Object.assign(Object.assign({}, exports.defaultConfig.callbacks), callbacks) });
            //@ts-ignore
            return yield (0, next_auth_1.default)(req, res, authOptions);
        });
    };
};
exports.McfeAuth = McfeAuth;
//# sourceMappingURL=nextauth.js.map