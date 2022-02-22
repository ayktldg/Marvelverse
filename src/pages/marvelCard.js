import { getComicCardView } from "../views/comicCardView.js";
import { getCharacterCardView } from "../views/characterCardView.js";
import { getEventCardView } from "../views/eventCardView.js";
import { fetchData } from "./fetchData.js";

export const getMarvelCards = (marvelsData, container, endpoint) => {
  const dataContainer = document.querySelector(container);
  const marvelList = document.createElement("ul");
  marvelList.classList.add("marvels__list");
  dataContainer.appendChild(marvelList);
  if (marvelsData.length === 0) {
    const noDataMessage = document.createElement("h2");
    noDataMessage.textContent = `OPPSS WE COULDN'T FIND YOUR SEARCHED MARVEL AT ${endpoint.toUpperCase()} !!`;
    noDataMessage.classList.add("no-data-message");
    dataContainer.appendChild(noDataMessage);
  }
  marvelsData.forEach((marvel) => {
    let marvelCard;
    if (endpoint === "comics") {
      if (marvel.images.length > 0) {
        marvelCard = getComicCardView(marvel);
        marvelList.appendChild(marvelCard);
        cardHandler(endpoint, marvelCard);
      }
    }
    if (endpoint === "characters") {
      if (!marvel.thumbnail.path.includes("/image_not_available")) {
        marvelCard = getCharacterCardView(marvel);
        marvelList.appendChild(marvelCard);
        cardHandler(endpoint, marvelCard);
      }
    }
    if (endpoint === "events") {
      if (!marvel.thumbnail.path.includes("/image_not_available")) {
        marvelCard = getEventCardView(marvel);
        marvelList.appendChild(marvelCard);
        cardHandler(endpoint, marvelCard);
      }
    }
  });
};

const cardHandler = (endpoint, card) => {
  const link = card.childNodes[1];
  link.addEventListener("click", async () => {
    try {
      await fetchData.fetchDetails(endpoint, link.id);
    } catch (err) {
      console.log(err);
    }
  });
};
