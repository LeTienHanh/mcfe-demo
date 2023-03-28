import { McfeAuth, authOptions } from "mcfeshared/esm/auth";

const { BASE_PATH } = process.env;

export default McfeAuth({
  callbacks: {
    async redirect({ baseUrl }: { baseUrl: string }) {
      return baseUrl + BASE_PATH;
    },
  },
});

export { authOptions };
