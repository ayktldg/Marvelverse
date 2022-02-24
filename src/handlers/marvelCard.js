import { getComicCardView } from "../views/comicCardView.js";
import { getCharacterCardView } from "../views/characterCardView.js";
import { getEventCardView } from "../views/eventCardView.js";
import { fetchDetails } from "./fetchData.js";

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
      }
    } else if (endpoint === "characters") {
      if (!marvel.thumbnail.path.includes("/image_not_available")) {
        marvelCard = getCharacterCardView(marvel);
      }
    } else if (endpoint === "events") {
      if (!marvel.thumbnail.path.includes("/image_not_available")) {
        marvelCard = getEventCardView(marvel);
      }
    } else {
      throw new Error("Error: Undefined endpoint ");
    }

    if (marvelCard) {
      marvelList.appendChild(marvelCard);
      cardHandler(endpoint, marvelCard);
    }
  });
};

const cardHandler = (endpoint, card) => {
  const link = card.childNodes[1];
  link.addEventListener("click", async () => {
    try {
      await fetchDetails(endpoint, link.id);
    } catch (err) {
      console.log(err);
    }
  });
};
