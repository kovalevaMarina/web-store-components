import Input from "../../Input";

const Basket__payment = () => {
  return `
  <h3 class="basket-payment__title txt--dark">Оплата</h3>
  <div class="basket-payment__wrap">
    ${Input("basket-payment__input", "radio", "", "nocash")}
    <label class="basket-payment__label" for="nocash">Безналичный расчет для юр.лиц (счет на оплату)</label>
  </div>
  <div class="basket-payment__wrap">
    ${Input("basket-payment__input", "radio", "", "cash")}
    <label class="basket-payment__label" for="nocash">Оплата наличными</label>
  </div>
  <div class="basket-payment__wrap">
    ${Input("basket-payment__input", "radio", "", "card")}
    <label class="basket-payment__label" for="nocash">Оплата Банковской картой (VISA, MasterCard) без комиссии при доставке через платежный терминал</label>
  </div>
 `;
};

export default Basket__payment;
