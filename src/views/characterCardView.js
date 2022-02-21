export const getCharacterCardView = (marvel) => {
  const characterCard = document.createElement("li");
  characterCard.id = marvel.id;
  characterCard.classList.add("card");
  characterCard.classList.add("character__card");
  characterCard.classList.add("animate__animated");
  characterCard.classList.add("animate__fadeInLeftBig");
  characterCard.innerHTML = String.raw`
  <div class="card__header">
        <img
          src="${marvel.thumbnail.path}.${marvel.thumbnail.extension}"
          alt="${marvel.name}"
          class="card__image"
        />
    </div>
      <div class="card__body">
        <h5 class="card__title">${marvel.name}</h5>
      </div>
      `;
  return characterCard;
};
