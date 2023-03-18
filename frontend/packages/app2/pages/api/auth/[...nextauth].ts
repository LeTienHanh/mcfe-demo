import { McfeAuth } from "mcfeshared/auth";

const { BASE_PATH } = process.env;

export default McfeAuth({
  callbacks: {
    async redirect({ baseUrl }: { baseUrl: string }) {
      console.log("==================");
      console.log(BASE_PATH);
      return baseUrl;
    },
  },
});
