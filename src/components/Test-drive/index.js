import Button from "../Button";
import properties__img from "../../assets/img/properties_img.png";

const TestDrive = () => {
  return `
    <section class="test-drive">
      <div class="container">
        <div class="test-drive__wrap">
          <div class="test-drive__wrap-txt">
            <h2 class="title-h2 test-drive__title">Посетите салон и проведите тест-драйв лично</h2>
            <p class="test-drive__txt">У нас есть шоурумы в Киеве и Одессе, где мы всегда рады видеть вас. Дать профессиональную консультацию и поделиться экспертизой</p>
            ${Button("Запись на тест-драйв", "btn-blue test-drive__btn")}
          </div>
          <div class="test-drive__wrap-img">
            <img src="${properties__img}">
          </div>
        </div>
      </div>
    </section>
  `;
};

export default TestDrive;
