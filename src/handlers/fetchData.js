import { API_KEY } from "../constants.js";
import { BASE_URL } from "../constants.js";
import { getMarvelCards } from "./marvelCard.js";
import { initDetailPage } from "../pages/detailPage.js";

const fetchJSON = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Fetch Failed. Network Error!!!");
  }
  return await response.json();
};

export const fetchCards = async function (dataContainer, endpoint) {
  const url = `${BASE_URL}${endpoint}?orderBy=-modified&limit=50&apikey=${API_KEY}`;
  try {
    const marvelsData = await fetchJSON(url);
    getMarvelCards(marvelsData.data.results, dataContainer, endpoint);
  } catch (err) {
    console.log(err);
  }
};

export const fetchDetails = async function (endpoint, id) {
  const url = `${BASE_URL}${endpoint}/${id}?apikey=${API_KEY}`;
  try {
    const marvelsData = await fetchJSON(url);
    initDetailPage(marvelsData.data.results[0], endpoint);
  } catch (err) {
    console.log(err);
  }
};

export const fetchSearchedMarvels = async function (
  dataContainer,
  endpoint,
  keyword
) {
  const searchedTerm =
    endpoint === "comics" ? "titleStartsWith" : "nameStartsWith";
  const url = `${BASE_URL}${endpoint}?${searchedTerm}=${keyword}&apikey=${API_KEY}`;
  try {
    const marvelsData = await fetchJSON(url);
    getMarvelCards(marvelsData.data.results, dataContainer, endpoint);
  } catch (err) {
    console.log(err);
  }
};
