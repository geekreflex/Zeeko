import { accentColorsConfig, windowStyleConfig } from "../config/appearance";
import { themeConfig } from "../config/theme";
import { currentAccentColor, currentTheme, currentWindowStyle } from "./theme";

export function changeTheme(payload) {
  if (payload == "nightfall") {
    currentTheme.set(themeConfig["nightfall"]);
  } else if (payload === "sunrise") {
    currentTheme.set(themeConfig["sunrise"]);
  } else if (payload == "amoled") {
    currentTheme.set(themeConfig["amoled"]);
  } else {
    currentTheme.set(themeConfig["nightfall"]);
  }
}

export function changeAccentColor(index) {
  localStorage.setItem("accentColor", JSON.stringify(index));
  currentAccentColor.set(accentColorsConfig[index]);
}

export function changeWindowStyle(index) {
  localStorage.setItem("windowStyle", JSON.stringify(index));
  currentWindowStyle.set(windowStyleConfig[index]);
}
