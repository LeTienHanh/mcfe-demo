import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const getDomainWithoutSubdomain = (url: string) => {
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

let useSecureCookies = process.env.NEXTAUTH_URL!.startsWith("https://");
const cookiePrefix = useSecureCookies ? "__Secure-" : "";
const domain = getDomainWithoutSubdomain(process.env.NEXTAUTH_URL!);

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

export const defaultConfig = {
  debug: true,
  useSecureCookies,
  cookies,
  secret: "372e4e86a44ecf741373543efdbe574a",
  callbacks: {
    async redirect({ baseUrl }: { baseUrl: string }) {
      return baseUrl;
    },
    async jwt({ token, user }: { user: Object; token: Object }) {
      if (user) {
        //@ts-ignore
        token.user = user;
        //@ts-ignore
        token.access_token = user.access_token;
      }

      return token;
    },
    async session({ session = {}, token = {} }) {
      //@ts-ignore
      session.access_token = token.access_token;
      //@ts-ignore
      session.user = token.user;

      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        try {
          const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();

          return user;
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
  ],
};

let authOptions = defaultConfig;

export const McfeAuth = ({ callbacks = {} } = {}) => {
  return async function auth(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Cache-Control", "no-store, max-age=0");

    authOptions = {
      ...defaultConfig,
      callbacks: {
        ...defaultConfig.callbacks,
        ...callbacks,
      },
    };

    //@ts-ignore
    return await NextAuth(req, res, authOptions);
  };
};

export { authOptions };
