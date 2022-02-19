import { getNavBarView } from "../views/navbarView.js";
import { appWrapper } from "../constants.js";
import { initSelectedMarvelPage } from "./marvelsListPage.js";

export const getNavbar = () => {
  const navbar = getNavBarView();
  appWrapper.appendChild(navbar);

  const navList = document.querySelector(".header__list");
  navList.addEventListener("click", (event) => {
    initSelectedMarvelPage(event.target.textContent.toLowerCase());
  });
};
