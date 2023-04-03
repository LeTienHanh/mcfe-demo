import { proxy } from "../server";
import { NextApiRequest, NextApiResponse } from "next";

const LOGIN_ENDPOINT_PATH = "/auth/login";

export default (req: NextApiRequest, res: NextApiResponse) => {
  req.url = LOGIN_ENDPOINT_PATH;
  proxy.web(req, res);
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
