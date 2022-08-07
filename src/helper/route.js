import ErrorPage from "../views/ErrorPage";
import Home from "../views/Home";
import CatalogPage from "../views/Catalog";
import ProductPage from "../views/Product";

const onHandleRoute = (e) => {
  e = e || e.window;
  e.preventDefault();
  window.history.pushState({}, "", e.target.href);
  onLocation();
};

const routes = {
  404: ErrorPage(),
  "/": Home(),
  "/catalog": CatalogPage(),
  "/product": ProductPage(),
};

const onLocation = () => {
  const { pathname } = window.location;
  const route = routes[pathname] || routes[404];
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.innerHTML = route;
};

window.onpopstate = onLocation;
window.route = onHandleRoute;

export { onHandleRoute, onLocation };
