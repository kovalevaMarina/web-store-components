import Header from "../../components/Header";
import Promo from "../../components/Promo";
import Benefits from "../../components/Benefits";
import Catalog from "../../components/Catalog";
import Question from "../../components/Question";
import Map from "../../components/Map";
import Footer from "../../components/Footer";

const root = document.getElementById("root");

const Home = () => {
  root.innerHTML = `
    ${Header()}
    <main id="main">
      ${Promo()}
      ${Benefits()}
      ${Catalog()}
      ${Question()}
      ${Map()}
    </main>
    ${Footer()}
  `;
};

export default Home;
