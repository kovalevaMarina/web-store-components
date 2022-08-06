import Button from "../Button";
import Input from "../Input";
import Menu from "../Menu";
import Link from "../Link";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return `
    <header class="header">
      <div class="container">
        <div class="header-top flex-beetwen">
          <div class="logo-wrap">
            <a class="logo" href="/">
              <img class="logo-img" src="${logo}" alt="logo-store">
            </a>
          </div>
          ${Input("input-search", "text", "Название модели или артикул")}
          <div class="phone">
            ${Link("phone-number", "tel:+380932210675", "+38 093 221-06-75")}
          </div>
          ${Button("Заказать звонок", "btn-light")}
        </div>
        <div class="header-bottom flex-beetwen">
        ${Link("link link-catalog", "/catalog", "&#x2630; Каталог")}
          ${Menu(
            "menu-list",
            "menu-list__item",
            "menu-list__item-link txt--dark"
          )}
          <div class="flex-beetwen">
            <select class="select-group" name="select-group">
              <option value="kiev">Киев</option>
              <option value="lviv">Львов</option>
              <option value="dnipro">Днепр</option>
            </select>
            <div class="basket-wrap">
              ${Link("basket-link txt-main txt--dark", "#", "Моя корзина")}
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
};

export default Header;
