import { getHomePageView } from "../views/homePageView.js";
import { mainPage } from "../constants.js";
//import { getNavBarView } from "../views/NavBarView.js";
import { getNavbar } from "./navbar.js";

export const initHomePage = () => {
  const home = getHomePageView();
  mainPage.appendChild(home);
  getNavbar();
};
