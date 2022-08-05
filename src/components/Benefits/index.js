import benefit_1 from "../../assets/icons/benefit_1.svg";
import benefit_2 from "../../assets/icons/benefit_2.svg";
import benefit_3 from "../../assets/icons/benefit_3.svg";
import Link from "../Link";

const Benefits = () => {
  const benefitsItem = [
    {
      img: benefit_1,
      text: "Бесплатная доставка по Киеву и Одессе— от 3 шт.",
      link: "Как получить?",
    },
    {
      img: benefit_2,
      text: "Индивидуальные скидки при заказе от 3 шт.",
      link: "Смотреть условия",
    },
    {
      img: benefit_3,
      text: "Для юридических лиц действуют особые условия",
      link: "Узнать подробнее",
    },
  ];

  return `
    <section class="benefits">
      <div class="container">
        <div class="benefits-list flex-beetwen">
            ${benefitsItem
              .map(
                (benefit) => `
                <div class="benefits-list__item">
                  <img class="benefits-list__item--img" src=${benefit.img}> 
                  <p class="benefits-list__item--txt txt--dark">${
                    benefit.text
                  }</p>
                  ${Link("benefits-list__item--link", "#", `${benefit.link}`)}
                </div>`
              )
              .join("")}
        </div>
      </div>
    </section>
  `;
};

export default Benefits;
