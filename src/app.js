import { initSelectedMarvelPage } from "./pages/marvelsListPage.js";
import { getNavbar } from "./pages/navbar.js";
import { getFooter } from "./pages/footer.js";
import { createMainPage } from "./pages/mainPage.js";
import { INITIAL_ENDPOINT } from "./constants.js";

const loadApp = () => {
  getNavbar();
  createMainPage();
  initSelectedMarvelPage(INITIAL_ENDPOINT);
  getFooter();
};

window.addEventListener("load", loadApp);
