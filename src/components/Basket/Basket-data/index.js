import Input from "../../Input";

const Basket__data = () => {
  return `
    <h3 class="basket-data__title txt--dark">Ваши данные</h3>
    <p class="basket-data__txt">Заполните все обязательные поля, чтобы мы смогли с вами связаться для уточнения заказа</p>
    ${Input("basket-data__input", "text", "ФИО")}
    ${Input(
      "basket-data__input",
      "email",
      "Электронная почта (не обязательно)"
    )}
    ${Input("basket-data__input", "tel", "Телефон")}
  `;
};

export default Basket__data;
