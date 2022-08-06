import Menu from "../Menu";
import Link from "../Link";
import store from "../../../store.json";
import logo from "../../assets/img/logo.png";

const Footer = () => {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-wrap">
          <div class="footer-left">
            <a class="logo" href="/">
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
                <li class="contact-list__item">
                  ${Link(
                    "contact-list__item-link contact-list__item-info contact-list__item-info--phone",
                    "tel:+380932210675",
                    `${store.phone}`
                  )}
                </li>
                <li class="contact-list__item">
                  ${Link(
                    "contact-list__item-link contact-list__item-info contact-list__item-info--email",
                    "https://goo.gl/maps/LmgcjBbRqc1kE4Yw5",
                    `${store.email}`
                  )}
                </li>
                <li class="contact-list__item">
                  ${Link(
                    "contact-list__item-link contact-list__item-info contact-list__item-info--address",
                    "mailto:zakaz@kresla-samurai.com",
                    `${store.address}`
                  )}
                </li>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  `;
};

export default Footer;
