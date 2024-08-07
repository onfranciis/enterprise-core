import FeaturesV1 from "./components/v1/config";
import FeaturesV2 from "./components/v2/config";
import { IAppConfig } from "./types/config.types";

const appConfig: IAppConfig = {
  v1: FeaturesV1,
  v2: FeaturesV2,
};

export default appConfig;
