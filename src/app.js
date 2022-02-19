import { initHomePage } from "./pages/homePage.js";
import { getNavbar } from "./pages/navbar.js";
import { getFooter } from "./pages/footer.js";

export const loadApp = () => {
  getNavbar();
  initHomePage();
  getFooter();
};

window.addEventListener("load", loadApp);
