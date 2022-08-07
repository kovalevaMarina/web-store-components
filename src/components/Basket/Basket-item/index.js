import pictureProduct from "../../../assets/img/product_black.png";
import trash from "../../../assets/icons/trash.svg";
import Button from "../../Button";

const Basket__item = () => {
  return `<div class="basket-item">
    <img class="basket-item__img" src="${pictureProduct}">
    <div class="basket-item__info">
      <h5 class="title-h5 txt--dark">Кресло Samurai KL-1.04</h5>
      <p class="basket-item__txt txt-main">Характеристики, цвет, механизм и прочее. Артикул: 266-460</p>
    </div>
    <div class="basket-item__count">
      ${Button("-", "btn-product__remove")}
      <span class="product-count">1</span>
      ${Button("+", "btn-product__add")}
    </div>
    <div class="basket-item__price">
      <p class="basket-item__price-new txt--dark">3 000 грн</p>
      <p class="basket-item__price-old txt--dark">5 000 грн</p>
    </div>
    <div class="basket-item__trash">
      <img src="${trash}">
    </div>
  </div>`;
};

export default Basket__item;
