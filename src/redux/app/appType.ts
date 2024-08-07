export type IVersion = "v1" | "v2";

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
