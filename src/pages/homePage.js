export const initHomePage = () => {
  const mainPage = document.getElementById("app");
  const home = document.createElement("div");
  home.classList.add("home");
  home.innerHTML = String.raw`
    <h1>Hello Marvelverse</h1>
    `;
  mainPage.appendChild(home);
};
