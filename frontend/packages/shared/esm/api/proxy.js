import { __awaiter } from "tslib";
import { proxy } from "mcfeshared/server";
import { getServerSession } from "next-auth/next";
export default (authOptions = {}) => {
    return (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const session = yield getServerSession(req, res, authOptions);
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
        proxy.web(req, res);
    });
};
export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};
//# sourceMappingURL=proxy.js.map