import { clearMainPage } from "../handlers/pageCleaner.js";
import { getMarvelDetailView } from "../views/marvelDetailView.js";
import { getCharacterDetailView } from "../views/characterDetailView.js";

export const initDetailPage = (marvelDetails, endpoint) => {
  const main = clearMainPage();
  let pageView;
  if (endpoint === "comics" || endpoint === "events") {
    pageView = getMarvelDetailView(marvelDetails);
  } else if (endpoint === "characters") {
    pageView = getCharacterDetailView(marvelDetails);
  }
  main.appendChild(pageView);
};
