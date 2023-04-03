import { proxy } from "../server";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

export default (authOptions = {}) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);

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
  };
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
