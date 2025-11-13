import { BsGrid1X2, BsPeople, BsCalendar3Week, BsClock} from "react-icons/bs";
import "./campanhaInfo.css";

function CampanhaInfoCard() {
  return (
    <div className="cardCampanha">
      <div className="cardTitle">
        <div className="cardName">
          <span className="cardId">Id: 21</span>
          <h3>Pagamento Netflix 3 - out 2025</h3>
        </div>
        <span className="cardStatus">Campanha ativa</span>
      </div>

      <div className="cardGrid">
        <div className="cardColumn">
          <div className="cardItem">
            <BsPeople className="iconInfo" />
            <span>Alunos Unipam</span>
          </div>
          <div className="cardItem">
            <BsGrid1X2 className="iconInfo" />
            <span>Netflix 2</span>
          </div>
        </div>

        <div className="cardColumn">
          <div className="cardItem">
            <BsCalendar3Week className="iconInfo" />
            <span>02-11-2025</span>
          </div>
          <div className="cardItem">
            <BsClock className="iconInfo" />
            <span>16:40</span>
          </div>
        </div>

        <div className="cardColumn end">
          <span className="finalizaLabel">Finaliza em:</span>
          <span className="finalizaTempo">5 dias</span>
        </div>
      </div>
    </div>
  );
}

export default CampanhaInfoCard;
