export const getNavBarView = () => {
  const navbar = document.createElement("header");
  navbar.innerHTML = String.raw`
    <div class="container">
      <span class="header__logo">MARVELVERSE</span>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item">Comics</li>
          <li class="header__item">Characters</li>
          <li class="header__item">Events</li>
        </ul>
        <div class="header__search">
            <div class="header__input-field">
              <input type="text" placeholder="Search.." name="search" class="header__input">
            </div>
            <div class="header__select-field">
              <select class="header__select-box">
                <option value="comics">Comics</option>
                <option value="characters">Characters</option>
                <option value="events">Events</option>
              </select>
            </div>
            <button class="header__search__btn"><i class="fa fa-search"></i></button>
        </div>
      </nav>
    </div>
    `;
  return navbar;
};
