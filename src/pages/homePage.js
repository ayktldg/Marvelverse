import { getHomePageView } from "../views/homePageView.js";
import { mainPage } from "../constants.js";
import { API_KEY } from "../constants.js";
import { getMarvelCards } from "./marvelCard.js";

export const initHomePage = async () => {
  try {
    const home = getHomePageView();
    const main = document.getElementById("main");
    main.appendChild(home);
    const dataContainerClass = ".home__container";
    await fetchComics(dataContainerClass);
  } catch (err) {
    console.log(err);
  }
};

const fetchComics = async (dataContainerClass) => {
  const url = `https://gateway.marvel.com:443/v1/public/comics?orderBy=-modified&limit=10&apikey=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Fetch Failed. NEtwork Error!!!");
  }
  const marvelsData = await response.json();
  getMarvelCards(marvelsData.data.results, dataContainerClass, "comics");
};
