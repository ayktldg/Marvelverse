export const getMarvelCardView = (marvel) => {
  const marvelCard = document.createElement("li");
  marvelCard.classList.add("card");
  marvelCard.innerHTML = String.raw`
    <div class="card__header">
        <img
          src="${marvel.images[0].path}.${marvel.images[0].extension}"
          alt="${marvel.title}"
          class="card__image"
        />
    </div>
    <div class="card__body">
      <h5 class="card__title">${marvel.title}</h5>
    </div>
    `;
  return marvelCard;
};
