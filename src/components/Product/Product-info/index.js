import Button from "../../Button";
import Product_color from "../Product-color";
import productImgBlack from "../../../assets/img/product_black.png";

const Product_info = () => {
  return `
  <div class="product-info">
    <div class="product-info__img">
      <img src="${productImgBlack}">
    </div>
    <div class="product-info__txt">
      <h2 class="product-info__txt-title txt--dark">Кресло Samurai S-2.04 плюс вторая строка</h2>
      <p class="product-info__txt-details">Эргономичное офисное кресло с синхромеханизмом качания «MultiBlock» — раздельное синхронное отклонение спинки и сиденья кресла.</p>
      <div class="product-info__color">Черный</div>
      ${Product_color()}
      <div class="product-info__mechanism">Механизм</div>
      <p class="product-info__mechanism-txt">Эргономичное офисное кресло с синхромеханизмом качания «MultiBlock» — раздельное синхронное.</p>
      <div class="product-info__price">
        <p class="product-info__price-old txt--dark">5 000 грн</p>
        <p class="product-info__price-new txt--dark">3 000 грн</p>
      </div>
      ${Button("Добавить в корзину", "btn-blue btn-product")}
      ${Button("-", "btn-product__remove")}
      <span class="product-count">1</span>
      ${Button("+", "btn-product__add")}
    </div>
  </div>
  `;
};

export default Product_info;
