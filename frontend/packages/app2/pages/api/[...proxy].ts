import proxy, { config } from "mcfeshared/esm/api/proxy";
import { authOptions } from "./auth/[...nextauth]";

export default proxy(authOptions);
export { config };
