import { API_KEY } from "../constants.js";
import { BASE_URL } from "../constants.js";
import { getMarvelCards } from "./marvelCard.js";

export const fetchData = {
  fetchCards: async function (dataContainer, endpoint) {
    const url = `${BASE_URL}${endpoint}?limit=20&apikey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fetch Failed. Network Error!!!");
    }
    const marvelsData = await response.json();

    getMarvelCards(marvelsData.data.results, dataContainer, endpoint);
  },
};