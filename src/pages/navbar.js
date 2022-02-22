import { getNavBarView } from "../views/navbarView.js";
import { APP_UI } from "../constants.js";
import { initSelectedMarvelPage } from "./marvelsListPage.js";
import { INITIAL_ENDPOINT } from "../constants.js";
import { fetchSearchedMarvels } from "../handlers/fetchData.js";

export const getNavbar = () => {
  const navbar = getNavBarView();
  APP_UI.appendChild(navbar);

  const navList = document.querySelector(".header__list");
  const navLogo = document.querySelector(".header__logo");
  const searchBtn = document.querySelector(".header__search__btn");
  const searchInput = document.querySelector(".header__input");
  const selectBox = document.querySelector(".header__select-box");

  navList.addEventListener("click", (event) => {
    const endpoint = event.target.textContent.toLowerCase();
    initSelectedMarvelPage(endpoint);
  });

  navLogo.addEventListener("click", () => {
    initSelectedMarvelPage(INITIAL_ENDPOINT);
  });

  searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    initSelectedMarvelPage(`${selectBox.value},${searchInput.value}`, true);
    searchInput.value = "";
  });
};
