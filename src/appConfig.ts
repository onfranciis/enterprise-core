import FeaturesV1 from "./components/v1/config";
import FeaturesV2 from "./components/v2/config";
import FeaturesV3 from "./components/v3/config";
import { IAppConfig } from "./types/config.types";

const appConfig: IAppConfig = {
  v1: FeaturesV1,
  v2: FeaturesV2,
  v3: FeaturesV3,
};

export default appConfig;
