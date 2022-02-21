export const getMarvelDetailView = (marvelData) => {
  const marvel = organizeMarvelData(marvelData);
  const detailsView = document.createElement("div");
  detailsView.classList.add("details");
  detailsView.innerHTML = String.raw`
        <img
          src="${marvel.image}"
          alt="${marvel.title}"
          class="detail__img--bg"
        />
        <div class="detail__img__cover">
  <div class="container animate__animated animate__fadeIn">
    <div class="detail__img__wrapper">
      <img
          src="${marvel.image}"
          alt="${marvel.title}"
          class="detail__img"
      />
    </div>
    <div class="detail__content">
        <div class="detail__hero">
            <h1 class="detail__title">${marvel.title}</h1>
            <h4>Creators:</h4>
            <p>${marvel.creators}</p>
            <h4>Characters:</h4>
            <p>${marvel.characters}</p>
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

const organizeMarvelData = (marvel) => {
  const creators =
    marvel.creators.items.length > 0
      ? marvel.creators.items
          .map((creator) => `${creator.name}(${creator.role})`)
          .join(", ")
      : "No creator information";
  const description =
    marvel.description === "" ? "No available description" : marvel.description;

  const characters =
    marvel.characters.items.length > 0
      ? marvel.characters.items.map((character) => character.name).join(", ")
      : "No character information";
  const image = `${marvel.thumbnail.path}.${marvel.thumbnail.extension}`;
  const { title } = marvel;
  return {
    title,
    image,
    characters,
    description,
    creators,
  };
};
