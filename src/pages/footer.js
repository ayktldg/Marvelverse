import { getFooterView } from "../views/footerView.js";
import { appWrapper } from "../constants.js";

export const getFooter = () => {
  const footer = getFooterView();
  appWrapper.appendChild(footer);
};
