import { appWrapper } from "../constants.js";

export const generateMainPage = () => {
  const mainPage = document.createElement("main");
  mainPage.id = "main";
  appWrapper.appendChild(mainPage);
};
