import kyivstar from "../../assets/img/clients/kyivstar.png";
import mobiloshka from "../../assets/img/clients/mobiloshka.png";
import novaposhta from "../../assets/img/clients/novaposhta.png";
import silpo from "../../assets/img/clients/silpo.png";
import ukrposhta from "../../assets/img/clients/ukrposhta.svg";
import workua from "../../assets/img/clients/workua.png";

const Clients = () => {
  const arrClients = [
    kyivstar,
    mobiloshka,
    novaposhta,
    silpo,
    ukrposhta,
    workua,
  ];

  const renderIconClients = (srcWay) => {
    return `
      <div class="clients-wrap__img">
        <img class="clients-wrap__img-icon"src=${srcWay}>
      </div>
    `;
  };

  return `
    <section class="clients">
      <div class="container">
        <h2 class="title-h2 clients-title txt--dark">Наши клиенты</h2>
        <div class="clients-wrap flex-beetwen">
          ${arrClients.map((client) => renderIconClients(client)).join("")}
        </div>
      </div>
    </section>
  
  `;
};

export default Clients;
