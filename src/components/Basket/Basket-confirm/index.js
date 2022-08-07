import Button from "../../Button";

const Basket__confirm = () => {
  return `
    <div class="basket-confirm">
      <div class="container">
        <div class="basket-confirm__wrap">
          ${Button("Оформить заказ", "btn-blue")}
          <p class="basket-confirm__txt">Нажимая «Оформить заказ», вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
          </p>
        </div>
      </div>
    </div>
  `;
};

export default Basket__confirm;
