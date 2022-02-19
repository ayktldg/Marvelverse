import { getMarvelsListView } from "../views/marvelsListView.js";
//import { mainPage } from "../constants.js";
import { API_KEY } from "../constants.js";
import { getMarvelCards } from "./marvelCard.js";

export const initSelectedMarvelPage = async (endpoint) => {
  try {
    const main = document.getElementById("main");
    main.innerHTML = "";
    const characters = getMarvelsListView(endpoint);
    main.appendChild(characters);
    const dataContainerClass = ".marvels__container";
    await fetchCharacters(dataContainerClass, endpoint);
  } catch (err) {
    console.log(err);
  }
};

const fetchCharacters = async (dataContainerClass, endpoint) => {
  const url = `https://gateway.marvel.com:443/v1/public/${endpoint}?limit=10&apikey=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Fetch Failed. Network Error!!!");
  }
  const marvelsData = await response.json();

  getMarvelCards(marvelsData.data.results, dataContainerClass, endpoint);
};
