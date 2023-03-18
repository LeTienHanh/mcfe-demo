import { __awaiter } from "tslib";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export function auth(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Get a custom cookie value from the request
        const someCookie = req.cookies["some-custom-cookie"];
        return yield NextAuth(req, res, {
            providers: [
                CredentialsProvider({
                    name: "Credentials",
                    credentials: {
                        username: { label: "Username", type: "text" },
                        password: { label: "Password", type: "password" },
                    },
                    authorize(credentials, req) {
                        return __awaiter(this, void 0, void 0, function* () {
                            /*  const res = await fetch("/your/endpoint", {
                              method: "POST",
                              body: JSON.stringify(credentials),
                              headers: { "Content-Type": "application/json" },
                            });
                            const user = await res.json(); */
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
    });
}
//# sourceMappingURL=nextauth.js.map