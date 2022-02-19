import { initHomePage } from "./pages/homePage.js";
import { getNavbar } from "./pages/navbar.js";
import { getFooter } from "./pages/footer.js";
import { generateMainPage } from "./pages/mainPage.js";

export const loadApp = () => {
  getNavbar();
  generateMainPage();
  initHomePage();
  getFooter();
};

window.addEventListener("load", loadApp);
