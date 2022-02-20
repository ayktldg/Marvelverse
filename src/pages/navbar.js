import { getNavBarView } from "../views/navbarView.js";
import { APP_UI } from "../constants.js";
import { initSelectedMarvelPage } from "./marvelsListPage.js";
import { INITIAL_ENDPOINT } from "../constants.js";

export const getNavbar = () => {
  const navbar = getNavBarView();
  APP_UI.appendChild(navbar);

  const navList = document.querySelector(".header__list");
  const navLogo = document.querySelector(".header__logo");

  navList.addEventListener("click", (event) => {
    initSelectedMarvelPage(event.target.textContent.toLowerCase());
  });

  navLogo.addEventListener("click", () => {
    initSelectedMarvelPage(INITIAL_ENDPOINT);
  });
};
