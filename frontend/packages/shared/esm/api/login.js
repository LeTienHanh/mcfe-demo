import { proxy } from "mcfeshared/server";
const LOGIN_ENDPOINT_PATH = "/auth/login";
export default (req, res) => {
    req.url = LOGIN_ENDPOINT_PATH;
    proxy.web(req, res);
};
export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};
//# sourceMappingURL=login.js.map