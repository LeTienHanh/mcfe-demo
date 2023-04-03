"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const tslib_1 = require("tslib");
const server_1 = require("../server");
const next_1 = require("next-auth/next");
exports.default = (authOptions = {}) => {
    return (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const session = yield (0, next_1.getServerSession)(req, res, authOptions);
        if (!session) {
            res.status(401).send({
                error: "UnauthorizedException",
            });
            return;
        }
        // removes the api prefix from url
        //@ts-ignore
        req.url = req.url.replace(/^\/api/, "");
        //@ts-ignore
        req.headers.authorization = `Bearer ${session.access_token}`;
        server_1.proxy.web(req, res);
    });
};
exports.config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};
//# sourceMappingURL=proxy.js.map