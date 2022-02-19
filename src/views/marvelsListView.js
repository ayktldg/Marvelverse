export const getMarvelsListView = (endpoint) => {
  const marvelCards = document.createElement("div");
  marvelCards.classList.add(endpoint);
  marvelCards.innerHTML = String.raw`
  <div class="container marvels__container">
    <h2 class="marvels__title">${endpoint.toUpperCase()}</h2>
  </div>
      `;
  return marvelCards;
};
