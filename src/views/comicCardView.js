export const getComicCardView = (marvel) => {
  const comicCard = document.createElement("li");
  comicCard.classList.add("card");
  comicCard.classList.add("comic__card");
  comicCard.classList.add("animate__animated");
  comicCard.classList.add("animate__fadeInDown");

  comicCard.innerHTML = String.raw`
  <a id="${marvel.id}" class=""card__link>
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
    </a>
    `;
  return comicCard;
};
