import Link from "../../Link";

const Product_description = () => {
  return `
    <section class="product-description">
      <div class="container">
        <div class="product-description__wrap">
          <div class="product-description__txt">
            <h4 class="title-h4 product-description__title txt--dark">Описание товара</h4>
            <p class="product-description__txt-main txt-main">Здесь будет более подробно развернуто ключевое. У нас есть шоурумы в Киеве и Днепре, где мы всегда рады. Дать профессиональную консультацию и поделиться экспертизой. У нас есть шоурумы в Киеве и Днепре, где мы всегда рады видеть вас.</p>
            ${Link("product-description__link txt-main", "#", "Развернуть")}
          </div>
          <div class="product-description__txt">
            <h4 class="title-h4 product-description__title txt--dark">Характеристики</h4>
              <div class="product-description__grid">
                <p class="product-description__grid-item">Высота кресла</p>
                <p class="product-description__grid-item">1170-1230 мм</p>
                <p class="product-description__grid-item">Высота сиденья</p>
                <p class="product-description__grid-item">460-520 мм</p>
                <p class="product-description__grid-item">Высота спинки</p>
                <p class="product-description__grid-item">745 мм</p>
                <p class="product-description__grid-item">Ширина сиденья</p>
                <p class="product-description__grid-item">510 мм</p>
              </div>
              ${Link("product-description__link txt-main", "#", "Развернуть")}
          </div>
        </div>
      </div>
    </section>
  `;
};

export default Product_description;
