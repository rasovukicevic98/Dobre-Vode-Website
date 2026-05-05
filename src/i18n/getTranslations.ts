import en from "./en";
import me from "./me";

export function getTranslations(lang: string) {
  switch (lang) {
    case "me":
      return me;
    case "en":
    default:
      return me;
  }
}
