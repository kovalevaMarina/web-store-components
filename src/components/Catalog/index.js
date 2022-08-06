import chair_1 from "../../assets/img/chair_1.png";
import chair_2 from "../../assets/img/chair_2.png";
import Button from "../Button";
import Select from "../Catalog/Select";
import Sort from "../Catalog/Sort";

const Catalog = (sortItem = false) => {
  const catalogItems = [
    {
      img: chair_1,
      text: "Samurai KL-1.04 Темно-коричневый",
      priceNew: "5 000 грн",
      priceOld: "3 000 грн",
      btn: Button("Добавить в корзину", "btn-blue"),
    },
    {
      img: chair_2,
      text: "Samurai KL-1.04 Темно-коричневый",
      priceNew: "6 000 грн",
      priceOld: "4 000 грн",
      btn: Button("Добавить в корзину", "btn-blue"),
    },
    {
      img: chair_2,
      text: "Samurai KL-1.04 Темно-коричневый",
      priceNew: "5 000 грн",
      priceOld: "3 000 грн",
      btn: Button("Добавить в корзину", "btn-blue"),
    },
    {
      img: chair_2,
      text: "Samurai KL-1.04 Темно-коричневый",
      priceNew: "5 000 грн",
      priceOld: "3 000 грн",
      btn: Button("Добавить в корзину", "btn-blue"),
    },
    {
      img: chair_2,
      text: "Samurai KL-1.04 Темно-коричневый",
      priceNew: "5 000 грн",
      priceOld: "3 000 грн",
      btn: Button("Добавить в корзину", "btn-blue"),
    },
    {
      img: chair_2,
      text: "Samurai KL-1.04 Темно-коричневый",
      priceNew: "5 000 грн",
      priceOld: "3 000 грн",
      btn: Button("Добавить в корзину", "btn-blue"),
    },
    {
      img: chair_2,
      text: "Samurai KL-1.04 Темно-коричневый",
      priceNew: "5 000 грн",
      priceOld: "3 000 грн",
      btn: Button("Добавить в корзину", "btn-blue"),
    },
    {
      img: chair_2,
      text: "Samurai KL-1.04 Темно-коричневый",
      priceNew: "5 000 грн",
      priceOld: "3 000 грн",
      btn: Button("Добавить в корзину", "btn-blue"),
    },
  ];

  return `
    <section class="catalog">
      <div class="container">
        <div class="catalog-title">
          <h2 class="title-h2 txt--dark">Каталог кресел</h2>
          ${sortItem ? Sort() : ""}
        </div>
        ${Select()}
        <div class="catalog-list">
          ${catalogItems
            .map(
              (catalogItem) => `
            <div class="catalog-list__item flex-column--center">
              <img class="catalog-list__item--img" src=${catalogItem.img}>
              <h5 class="title-h5 catalog-list__item--title txt--dark">${catalogItem.text}</h5>
              <p class="catalog-list__item-price--new txt--dark">${catalogItem.priceNew}</p>
              <p class="catalog-list__item-price--old txt--dark">${catalogItem.priceOld}</p>
              <div class="hoverable">${catalogItem.btn}</div>
            </div>
          `
            )
            .join("")}
        </div>
        ${Button("Показать все", "btn-light")}
      </div>
    </section>
  `;
};

export default Catalog;
