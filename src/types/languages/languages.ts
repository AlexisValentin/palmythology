export enum Languages {
  ENGLISH = "en",
  FRENCH = "fr",
}

export const DefaultLanguage = Languages.FRENCH;

export interface RootState {
  language: Languages;
}
