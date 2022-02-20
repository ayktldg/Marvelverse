import { APP_UI } from "../constants.js";

export const generateMainPage = () => {
  const mainPage = document.createElement("main");
  mainPage.id = "main";
  APP_UI.appendChild(mainPage);
};
