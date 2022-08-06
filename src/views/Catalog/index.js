import Switch from "../../components/Switch";
import Catalog from "../../components/Catalog";
import Question from "../../components/Question";
import Map from "../../components/Map";

const CatalogPage = () => {
  return `
    <div>
      ${Switch()}
      ${Catalog(true)}
      ${Question()}
      ${Map()}
    </div>
  `;
};

export default CatalogPage;
