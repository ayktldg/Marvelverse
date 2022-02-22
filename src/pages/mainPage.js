import { APP_UI } from "../constants.js";

export const createMainPage = () => {
  const mainPage = document.createElement("main");
  mainPage.id = "main";
  APP_UI.appendChild(mainPage);
};
