import Link from "../Link";
import SwitchLine from "./Switch-line";

const Switch = (product = false, txt) => {
  return `
    <section class="switch">
      <div class="container">
        <div class="switch-wrap">
          ${Link("switch-link", "/", "Главная")}
          ${SwitchLine()}
          ${Link("switch-link active", "#", txt)}
          ${product ? SwitchLine() : ""}
          ${
            product
              ? Link("switch-link active", "#", "Кресло Samurai S-2.04")
              : ""
          }
        </div>
      </div>
    </section>
  `;
};

export default Switch;
