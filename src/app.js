import { initHomePage } from "./pages/homePage.js";

export const loadApp = () => {
  initHomePage();
};

window.addEventListener("load", loadApp);
