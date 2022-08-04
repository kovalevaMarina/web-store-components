import Menu from "../Menu";
import store from "../../../store.json";
import logo from "../../assets/img/logo.png";

const Footer = () => {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-wrap">
          <div class="footer-left">
            <a class="logo" href="#">
              <img class="logo-img" src="${logo}" alt="logo-store">
            </a>
            <p class="footer-txt footer-txt__private">Политика конфиденциальности</p>
            <p class="footer-txt footer-txt__copy">© 2021 Все права защищены</p>
          </div>
          <div class="footer-middle">
            ${Menu(
              "menu-list-second",
              "menu-list-second__item",
              "menu-list-second__item-link"
            )}
          </div>
          <div class="footer-right">
              <ul class="contact-list">
                <li class="contact-list__item"><a class="contact-list__item-link contact-list__item-info contact-list__item-info--phone" src="tel:+380932210675">${
                  store.phone
                }</a></li>
                <li class="contact-list__item"><a class="contact-list__item-link contact-list__item-info contact-list__item-info--email" src="https://goo.gl/maps/LmgcjBbRqc1kE4Yw5" target="_blank">${
                  store.email
                }</a></li>
                <li class="contact-list__item"><a class="contact-list__item-link contact-list__item-info contact-list__item-info--address" href="mailto:zakaz@kresla-samurai.com">${
                  store.address
                }</a></li>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  `;
};

export default Footer;
