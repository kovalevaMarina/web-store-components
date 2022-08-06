import Promo from "../../components/Promo";
import Benefits from "../../components/Benefits";
import Catalog from "../../components/Catalog";
import Question from "../../components/Question";
import Map from "../../components/Map";
import Properties from "../../components/Properties";
import TestDrive from "../../components/Test-drive";
import Clients from "../../components/Clients";
import Review from "../../components/Review";

const Home = () => {
  return `<div>
    ${Promo()}
    ${Benefits()}
    ${Catalog()}
    ${Properties()}
    ${TestDrive()}
    ${Clients()}
    ${Review()}
    ${Question()}
    ${Map()}
  </div>
  `;
};

export default Home;
