const createElement = (tag, nameClass, txt = undefined, parent) => {
  const elem = document.createElement(tag);
  elem.className = nameClass;
  if (txt) elem.innerHTML = txt;
  if (parent) parent.append(elem);
  return elem;
};

export { createElement };
