export const locales = ["fr", "ar", "en"] as const;
export const defaultLocale = "fr" as const;

export function getLanguage(locale: string) {
  switch (locale) {
    case "ar":
      return "عربي";
    case "en":
      return "English";
    default:
      return "Français";
  }
}
