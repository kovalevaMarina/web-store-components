import store from "../../../store.json";

const Menu = (classList, classItem, classLink) => {
  const renderItemMenu = (elem) => {
    return `<li class="${classItem}"><a class="${classLink} txt-main">${elem}</a></li>`;
  };

  return `
    <nav>
      <ul class="${classList}">
        ${store.menu.map(renderItemMenu).join("")}
      </ul>
    </nav>
  `;
};

export default Menu;
