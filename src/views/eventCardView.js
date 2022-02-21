export const getEventCardView = (marvel) => {
  const eventCard = document.createElement("li");
  eventCard.id = marvel.id;
  eventCard.classList.add("card");
  eventCard.classList.add("event__card");
  eventCard.classList.add("animate__animated");
  eventCard.classList.add("animate__fadeInLeftBig");
  eventCard.innerHTML = String.raw`
    <div class="card__header">
          <img
            src="${marvel.thumbnail.path}.${marvel.thumbnail.extension}"
            alt="${marvel.title}"
            class="card__image"
          />
      </div>
        <div class="card__body">
          <h5 class="card__title">${marvel.title}</h5>
        </div>
        `;
  return eventCard;
};
