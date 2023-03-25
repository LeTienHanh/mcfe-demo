import { __awaiter } from "tslib";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
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
export const McfeAuth = ({ callbacks = {} } = {}) => {
    return function auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.setHeader("Cache-Control", "no-store, max-age=0");
            return yield NextAuth(req, res, {
                debug: true,
                useSecureCookies,
                cookies,
                secret: "samesecretjwtkey",
                callbacks: Object.assign({ redirect({ baseUrl }) {
                        return __awaiter(this, void 0, void 0, function* () {
                            return baseUrl;
                        });
                    } }, callbacks),
                providers: [
                    CredentialsProvider({
                        name: "credentials",
                        credentials: {
                            username: { label: "Username", type: "text" },
                            password: { label: "Password", type: "password" },
                        },
                        authorize(credentials) {
                            return __awaiter(this, void 0, void 0, function* () {
                                //  const res = await fetch("http://localhost:5000/auth/login", {
                                //    method: "POST",
                                //    body: JSON.stringify(credentials),
                                //    headers: { "Content-Type": "application/json" },
                                //  });
                                //  const user = await res.json();
                                //  if (!user) return null;
                                //  return user;
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
//# sourceMappingURL=nextauth.js.map