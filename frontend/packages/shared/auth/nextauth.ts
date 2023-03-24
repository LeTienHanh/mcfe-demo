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

export const McfeAuth = ({ callbacks = {} } = {}) =>
  NextAuth({
    useSecureCookies,
    cookies,
    secret: "samesecretjwtkey",
    callbacks: {
      async redirect({ baseUrl }) {
        return baseUrl;
      },
      ...callbacks,
    },
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
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
            id: credentials?.username,
            name: credentials?.username,
            password: credentials?.password,
          };
        },
      }),
    ],
  });
