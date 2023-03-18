import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Get a custom cookie value from the request
  const someCookie = req.cookies["some-custom-cookie"];

  return await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
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
            id: credentials?.username,
            password: credentials?.password,
          };
        },
      }),
    ],
  });
}
