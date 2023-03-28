import { __awaiter } from "tslib";
import { proxy } from "mcfeshared/server";
import { getServerSession } from "next-auth/next";
export default (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield getServerSession(req, res, authOptions);
});
export const config = {
    api: {
        bodyParser: false,
    },
};
export default (req, res) => {
    return new Promise((resolve, reject) => {
        // removes the api prefix from url
        req.url = req.url.replace(/^\/api/, "");
        const cookies = new Cookies(req, res);
        const authorization = cookies.get("authorization");
        // don't forwards the cookies to the target server
        req.headers.cookie = "";
        if (authorization) {
            req.headers.authorization = authorization;
        }
        /**
         * if an error occurs in the proxy, we will reject the promise.
         * it is so important. if you don't reject the promise,
         * you're facing the stalled requests issue.
         */
        proxy.once("error", reject);
        proxy.web(req, res);
    });
};
export const config = {
    api: {
        bodyParser: false,
    },
};
//# sourceMappingURL=all.js.map