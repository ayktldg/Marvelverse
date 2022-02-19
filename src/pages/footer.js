import { getFooterView } from "../views/footerView.js";
import { mainPage } from "../constants.js";

export const getFooter = () => {
  const footer = getFooterView();
  mainPage.appendChild(footer);
};
