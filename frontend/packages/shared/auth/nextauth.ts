import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const McfeAuth = ({ callbacks = {} } = {}) =>
  NextAuth({
    callbacks: {
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
            id: credentials?.username,
            password: credentials?.password,
          };
        },
      }),
    ],
  });
