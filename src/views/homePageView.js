export const getHomePageView = () => {
  const home = document.createElement("div");
  home.classList.add("home");
  home.innerHTML = String.raw`
      `;
  return home;
};
