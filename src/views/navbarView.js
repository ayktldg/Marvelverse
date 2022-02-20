export const getNavBarView = () => {
  const navbar = document.createElement("header");
  navbar.innerHTML = String.raw`
    <div class="container">
      <span class="header__logo">MARVELVERSE</span>
      <nav>
        <ul class="header__list">
          <li class="header__item">Characters</li>
          <li class="header__item">Events</li>
        </ul>
      </nav>
    </div>
    `;
  return navbar;
};
