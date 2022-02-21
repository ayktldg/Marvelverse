export const getCharacterDetailView = (marvelData) => {
  const marvel = organizeCharacterData(marvelData);
  console.log(marvelData);
  const detailsView = document.createElement("div");
  detailsView.classList.add("details");
  detailsView.innerHTML = String.raw`
              <img
                src="${marvel.image}"
                alt="${marvel.name}"
                class="detail__img--bg"
              />
              <div class="detail__img__cover">
        <div class="container animate__animated animate__lightSpeedInRight">
          <div class="detail__img__wrapper">
            <img
                src="${marvel.image}"
                alt="${marvel.name}"
                class="detail__img"
            />
          </div>
          <div class="detail__content">
              <div class="detail__hero">
                  <h1 class="detail__title">${marvel.name}</h1>
                  <h4>Comics</h4>
                  <p>${marvel.comics}</p>
              </div>
              <div class="detail__description">
                  <h4>Description:</h4>
                  <p>${marvel.description}</p>
              </div> 
          </div>
        </div>
        </div>
            `;
  return detailsView;
};

const organizeCharacterData = (marvel) => {
  const comics =
    marvel.comics.items.length > 0
      ? marvel.comics.items.map((comic) => comic.name).join(", ")
      : "No comic information";
  const image = `${marvel.thumbnail.path}.${marvel.thumbnail.extension}`;
  const description =
    marvel.description === "" ? "No available description" : marvel.description;
  const name = marvel.name;
  return {
    name,
    image,
    comics,
    description,
  };
};
