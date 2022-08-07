import Basket__data from "../Basket-data";
import Basket__payment from "../Basket-payment";
import Basket__delivery from "../Basket-delivery";

const Basket__order = () => {
  return `
    <section class="basket-order">
      <div class="container">
        <div class="basket-order__wrap">
          ${Basket__data()}
        </div>
        <div class="basket-order__wrap">
          ${Basket__delivery()}
        </div>
        <div class="basket-order__wrap">
          ${Basket__payment()}
        </div>
      </div>
    </section>
  `;
};

export default Basket__order;
