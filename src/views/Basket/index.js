import Switch from "../../components/Switch";
import Basket from "../../components/Basket";

const BasketPage = () => {
  return `
    <div>
      ${Switch(false, "Корзина")}
      ${Basket()}
    </div>
  `;
};
export default BasketPage;
