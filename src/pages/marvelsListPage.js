import { getMarvelsListView } from "../views/marvelsListView.js";
import { getHomePageView } from "../views/homePageView.js";
import { clearMainPage } from "../handlers/pageCleaner.js";
import { fetchCards } from "../handlers/fetchData.js";
import { fetchSearchedMarvels } from "../handlers/fetchData.js";

export const initSelectedMarvelPage = (endpoint, fromSearch = false) => {
  const main = clearMainPage();
  const dataContainer = ".marvels__container";
  let pageView;

  if (fromSearch) {
    const termList = endpoint.split(",");
    const term = termList[0];
    const keyword = termList[1];
    pageView = getMarvelsListView(term);
    main.appendChild(pageView);
    fetchSearchedMarvels(dataContainer, term, keyword);
  } else {
    if (endpoint === "comics") {
      pageView = getHomePageView(endpoint);
    } else {
      pageView = getMarvelsListView(endpoint);
    }
    main.appendChild(pageView);
    fetchCards(dataContainer, endpoint);
  }
};
