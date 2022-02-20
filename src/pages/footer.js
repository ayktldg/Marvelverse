import { getFooterView } from "../views/footerView.js";
import { APP_UI } from "../constants.js";

export const getFooter = () => {
  const footer = getFooterView();
  APP_UI.appendChild(footer);
};
