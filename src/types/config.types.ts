import { IVersion } from "../redux/app/appType";

export type IAppConfig = { [K in IVersion]: IFeatures };

type initial = () => JSX.Element;

export type IFeatures = {
  RegistrationForm: initial;
  DarkMode?: initial;
};
