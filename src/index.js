import "./styles/all";
import { onHandleRoute } from "./helper/route";
import Home from "./views/Home";
Home();

document.getElementById("link").addEventListener("click", onHandleRoute);
