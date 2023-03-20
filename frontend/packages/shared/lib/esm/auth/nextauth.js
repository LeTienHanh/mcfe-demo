import { __awaiter } from "tslib";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const McfeAuth = ({ callbacks = {} } = {}) => NextAuth({
    callbacks: Object.assign({ redirect({ baseUrl }) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("base url: " + baseUrl);
                return baseUrl;
            });
        },
        jwt({ token }) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(token);
                return token;
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
                        name: credentials === null || credentials === void 0 ? void 0 : credentials.username,
                        password: credentials === null || credentials === void 0 ? void 0 : credentials.password,
                    };
                });
            },
        }),
    ],
});
//# sourceMappingURL=nextauth.js.map