import Basket__item from "./Basket-item";
import Basket__order from "./Basket-order";
import Basket__confirm from "./Basket-confirm";

const Basket = () => {
  return `
    <section class="basket">
      <div class="container">
        <h2 class="basket-title txt--dark">Ваш заказ</h2>
        <div class="basket-list">
          ${Basket__item()}
          ${Basket__item()}
          ${Basket__item()}
        </div>
      </div>
    </section>
    ${Basket__order()}
    ${Basket__confirm()}
  `;
};

export default Basket;
