export const getFooterView = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = String.raw`
    <div class="container">
      <p>Made with <i class="fas fa-heart footer_hearth"></i> in Netherlands</p>
      <div class="footer__socials">
        <a href="https://github.com/ayktldg" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/aykut-uludag/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://codepen.io/ayktldg" target="_blank"><i class="fab fa-codepen"></i></a>
      </div>
    </div>
      `;
  return footer;
};
