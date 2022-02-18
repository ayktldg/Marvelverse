import { getMarvelCardView } from "../views/marvelCardView.js";

export const getMarvelCards = (marvelsData) => {
  const home = document.querySelector(".home__container");
  const comicList = document.createElement("ul");
  comicList.classList.add("home__marvels-list");
  home.appendChild(comicList);
  marvelsData.forEach((marvel) => {
    if (marvel.images.length > 0) {
      const marvelCard = getMarvelCardView(marvel);
      comicList.appendChild(marvelCard);
    }
  });
};
