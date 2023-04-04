import proxy, {
  config,
} from "@ocean-network-express/mcfe-shared/esm/api/proxy";
import { authOptions } from "./auth/[...nextauth]";

export default proxy(authOptions);
export { config };
