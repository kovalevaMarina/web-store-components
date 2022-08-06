import Link from "../Link";

const Switch = () => {
  return `
    <section class="switch">
      <div class="container">
        <div class="switch-wrap">
          ${Link("switch-link", "/", "Главная")}
          <div class="switch-line">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.125 8.25L6.875 5.5L4.125 2.75" stroke="#CED2DA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          ${Link("switch-link active", "#", "Каталог")}
        </div>
      </div>
    </section>
  `;
};

export default Switch;