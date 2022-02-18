import { getNavBarView } from "../views/navbarView.js";
import { mainPage } from "../constants.js";
export const getNavbar = () => {
  //const home = document.querySelector(".home");
  const navbar = getNavBarView();
  mainPage.appendChild(navbar);

  const navList = document.querySelector(".header__list");
  navList.addEventListener("click", (event) => {
    console.log(event.target.textContent.toLowerCase());
  });
};
