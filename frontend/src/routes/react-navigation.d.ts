import type { SceneName } from './scene-name'

export type RootStackParamList = {
  [SceneName.SignIn] : undefined;
  [SceneName.Scheduling] : undefined;
  [SceneName.HairCuts] : undefined;
  [SceneName.UserConfigs]: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

