import { versions } from "../../components/Header";

export type IVersion = (typeof versions)[number];

export interface AppInitialState {
  version: IVersion;
  darkMode: boolean;
}

export interface changeVersionActionType {
  payload: {
    version: IVersion;
  };
}

export interface changeModeActionType {
  payload: {
    dark: boolean;
  };
}
