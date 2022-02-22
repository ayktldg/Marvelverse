import { API_KEY } from "../constants.js";
import { BASE_URL } from "../constants.js";
import { getMarvelCards } from "./marvelCard.js";
import { initDetailPage } from "./detailPage.js";
import { initSelectedMarvelPage } from "./marvelsListPage.js";

export const fetchData = {
  fetchCards: async function (dataContainer, endpoint) {
    const url = `${BASE_URL}${endpoint}?orderBy=-modified&limit=10&apikey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fetch Failed. Network Error!!!");
    }
    const marvelsData = await response.json();
    getMarvelCards(marvelsData.data.results, dataContainer, endpoint);
  },
  fetchDetails: async function (endpoint, id) {
    const url = `${BASE_URL}${endpoint}/${id}?apikey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fetch Failed. Network Error!!!");
    }
    const marvelDetails = await response.json();
    initDetailPage(marvelDetails.data.results[0], endpoint);
  },
  fetchSearchedMarvels: async function (endpoint, keyword) {
    const searchedTerm = endpoint === "comics" ? "title" : "name";
    const url = `${BASE_URL}${endpoint}?${searchedTerm}=${keyword}&apikey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fetch Failed. Network Error!!!");
    }
    const marvelsData = await response.json();
    console.log(marvelsData.data.results, endpoint);
    const dataContainer = ".marvels__container";
    initSelectedMarvelPage(endpoint, true);
    getMarvelCards(marvelsData.data.results, dataContainer, endpoint);
  },
};
