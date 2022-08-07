import productImgBlack from "../../../assets/img/product_black.png";
import productImgBlue from "../../../assets/img/product_blue.png";
import productImgGreen from "../../../assets/img/product_green.png";
import productImgRed from "../../../assets/img/product_red.png";

const Product_color = () => {
  const arrColors = [
    productImgBlack,
    productImgBlue,
    productImgGreen,
    productImgRed,
  ];

  const renderItemColors = (colorName) => {
    return `<img class="product-info__choise-color" src="${colorName}">`;
  };

  return `
    <div class="product-info__choise">
      ${arrColors.map((color) => renderItemColors(color, true)).join("")}
    </div>
  `;
};

export default Product_color;
