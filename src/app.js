import { initHomePage } from "./pages/homePage.js";
import { getNavbar } from "./pages/navbar.js";
export const loadApp = () => {
  getNavbar();
  initHomePage();
};

window.addEventListener("load", loadApp);
