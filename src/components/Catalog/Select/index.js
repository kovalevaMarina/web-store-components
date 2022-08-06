import select_chair_1 from "../../../assets/icons/select_chair_1.svg";
import select_chair_2 from "../../../assets/icons/select_chair_2.svg";
import select_chair_3 from "../../../assets/icons/select_chair_3.svg";

const Select = () => {
  const storeInfoSelect = [
    {
      title: "Спинка",
      option: "Сетка",
      img: select_chair_1,
    },

    {
      title: "Сиденье",
      option: "Кожзам",
      img: select_chair_2,
    },

    {
      title: "Подголовник",
      option: "3D",
      img: select_chair_3,
    },

    {
      title: "Подлокотники",
      option: "Все",
    },
  ];

  return `
    <div class="select-wrap">
      ${storeInfoSelect
        .map((elem) => {
          return `<fieldset class="select-fieldset">
            <legend class="select-title">${elem.title}</legend>
            <img class="select-img" src="${elem.img ? elem.img : ""}">
            <select class="select-list">
              <option class="select-option">${elem.option}</option>
            </select>
          </fieldset>`;
        })
        .join("")}
    </div>
  `;
};
export default Select;
