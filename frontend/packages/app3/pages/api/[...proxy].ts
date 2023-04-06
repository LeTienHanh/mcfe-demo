import proxy, {
  config,
} from "@ocean-network-express/mcfe-shared/cjs/api/proxy";
import { authOptions } from "./auth/[...nextauth]";

export default proxy(authOptions);
export { config };
