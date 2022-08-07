import Input from "../../Input";
import Link from "../../Link";

const Basket__delivery = () => {
  return `
    <h3 class="basket-delivery__title txt--dark">Доставка</h3>
    <div class="basket-delivery__wrap">
      ${Input("basket-delivery__input", "radio", "")}
      <div class="basket-delivery__input-wrap">
        <h5 class="basket-delivery__input-title">Самовывоз</h5>
        <p class="basket-delivery__input-txt">г.Киев, бул. Леси Украинки, 7а</p>
      </div>
    </div>
    <div class="basket-delivery__wrap">
      ${Input("basket-delivery__input", "radio", "")}
      <div class="basket-delivery__input-wrap">
        <h5 class="basket-delivery__input-title">Доставка курьером</h5>
        <p class="basket-delivery__input-txt">Стоимость — 450 грн, от 3 дней</p>
      </div>
    </div>
    <div class="basket-delivery__wrap">
      ${Input("basket-delivery__input", "radio", "")}
      <div class="basket-delivery__input-wrap">
        <h5 class="basket-delivery__input-title">Транспортной компании</h5>
        <p class="basket-delivery__input-txt">По всей стране, услуги ТК оплачиваются отдельно при получении</p>
      </div>
    </div>
    <h3 class="basket-delivery__title txt--dark">Адрес доставки</h3>
    <p class="basket-delivery__address">Уточните только город доставки. Остальные детали мы уточним по телефону</p>
    ${Input("basket-delivery__input-address", "text", "Город")}
    <div class="basket-delivery__load">
      ${Link("basket-delivery__link", "#", "&#128206; Загрузить реквизиты")}
    </div>
  `;
};

export default Basket__delivery;
