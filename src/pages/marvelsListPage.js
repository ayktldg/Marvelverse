import { getMarvelsListView } from "../views/marvelsListView.js";
import { getHomePageView } from "../views/homePageView.js";
import { clearMainPage } from "./pageCleaner.js";
import { fetchData } from "./fetchData.js";

export const initSelectedMarvelPage = async (endpoint, fromSearch = false) => {
  try {
    const main = clearMainPage();
    let pageView;

    if (fromSearch) {
      pageView = getMarvelsListView(endpoint);
      main.appendChild(pageView);
    } else {
      if (endpoint === "comics") {
        pageView = getHomePageView(endpoint);
      } else {
        pageView = getMarvelsListView(endpoint);
      }
      main.appendChild(pageView);
      const dataContainer = ".marvels__container";
      await fetchData.fetchCards(dataContainer, endpoint);
    }
  } catch (err) {
    console.log(err);
  }
};
