import Switch from "../../components/Switch";
import Product from "../../components/Product";
import Catalog from "../../components/Catalog";
import Question from "../../components/Question";
import Map from "../../components/Map";

const ProductPage = () => {
  return `
    <div>
      ${Switch(true)}
      ${Product()}
      ${Catalog()}
      ${Question()}
      ${Map()}
    </div>
  `;
};

export default ProductPage;
