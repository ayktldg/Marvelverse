export const getHomePageView = () => {
  const home = document.createElement("div");
  home.classList.add("home");
  home.innerHTML = String.raw`
  <div class="hero container animate__animated animate__lightSpeedInRight">
    <div class="hero__img__wrapper">
      <img
          src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/spidey02_ons_cut_dsk_01.jpg"
          alt="spidey hero image"
          class="hero__img"
      />
    </div>
    <div class="hero__statement">
      <h1 class="hero__title">START HERE TO MARVELVERSE</h1>
      <p>Comics, characters and events are coming with this world</p>
    </div>
  </div>
  <div class="container home__container">
    <h2 class="home__title">COMICS</h2>
  </div>
      `;
  return home;
};
