import "./campanhaInfo.css";
import Piechart from '/workspaces/PhishingSiteFront/phishingfront/src/components/Pages/Home/Piechart'

function Conversao() {
  return (
    <div className="conversaoContainer">
      <div className="conversaoSection left">
        <div className="conversaoTaxa">
          <h2>Taxa de Conversão</h2>
          <span>27%</span>
        </div>
        <div className="convesaoMedia">
          <h2>Conversão Média</h2>
          <span>31%</span>
        </div>
      </div>
      <div className="conversaoSection right">
        <div className="conversaoChart">
          <Piechart width="160%" height="160%"/>
        </div>
      </div>
      
    </div>
  );
}

export default Conversao;
