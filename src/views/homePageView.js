export const getHomePageView = () => {
  const home = document.createElement("div");
  home.classList.add("home");
  home.innerHTML = String.raw`
  <div class="hero container">
    <div class="hero__img__wrapper">
      <img
          src="../../public/assets/spidey-hero.jpeg"
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
