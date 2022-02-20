import { getNavBarView } from "../views/navbarView.js";
import { appWrapper } from "../constants.js";
import { initSelectedMarvelPage } from "./marvelsListPage.js";
import { initHomePage } from "./homePage.js";

export const getNavbar = () => {
  const navbar = getNavBarView();
  appWrapper.appendChild(navbar);

  const navList = document.querySelector(".header__list");
  const navLogo = document.querySelector(".header__logo");

  navList.addEventListener("click", (event) => {
    initSelectedMarvelPage(event.target.textContent.toLowerCase());
  });

  navLogo.addEventListener("click", () => {
    initHomePage();
  });
};
