import Button from "../Button";
import Input from "../Input";

const Form = () => {
  return `
    <form class="form">
      ${Input("input input__img input-name", "text", "Ваше имя")}
      ${Input("input input__img input-phone", "tel", "Телефон для связи")}
      ${Button("Заказать звонок", "btn-blue")}
    </form>
  `;
};

export default Form;
