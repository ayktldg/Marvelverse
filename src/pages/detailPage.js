import { clearMainPage } from "./pageCleaner.js";
import { getComicDetailPageView } from "../views/comicDetailPageView.js";

export const initDetailPage = (marvelDetails) => {
  const main = clearMainPage();
  let pageView = getComicDetailPageView(marvelDetails);
  main.appendChild(pageView);
};
