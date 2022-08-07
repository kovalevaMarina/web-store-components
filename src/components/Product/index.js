import Product_info from "../Product/Product-info";
import Product_color from "./Product-color";
import Product_description from "./Product-description";

const Product = () => {
  return `
    <section class="product">
      <div class="container">
        <div class="product-wrap">
          ${Product_info()}
          ${Product_color()}
        </div>
      </div>
    </section>
    ${Product_description()}
  `;
};

export default Product;
