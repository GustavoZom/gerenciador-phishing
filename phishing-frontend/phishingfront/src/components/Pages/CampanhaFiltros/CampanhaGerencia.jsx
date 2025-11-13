import CampaignListInfo from "../../Modules/CampaignListInfo/CampaignListInfo";
import SideNav from "../../Modules/sidenav/SideNav";
import './campanhaGerencia.css';

function CampanhaGerencia() {
  return (
    <div className="mainContainer">
      <div className="hSidenav">
        
      </div>

      <div className="cFilterContent">
        <div className="campanhaTitle">
          <h2>Campanhas</h2>
          <span>Nova Campanha</span>
        </div>

        <div className="filterContainer">
          <input type="text" placeholder="Id" />
          <input type="text" placeholder="Nome" />
          <select>
            <option value="">Grupo</option>
            <option value="grupo1">Grupo 1</option>
            <option value="grupo2">Grupo 2</option>
          </select>
            
          <select> 
            <option value="">Template</option>
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
          </select>

          <input type="date" placeholder="Data Fim" />
          <select>
            <option value="">Status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
          <input type="date" placeholder="Data Disparo" />
          <input type="time" placeholder="Hora Disparo" />

          <div className="filterButtons">
            <button className="btn-clear">Limpar Filtros</button>
            <button className="btn-search">Pesquisar</button>
          </div>
        </div>

        <div className="campaign">
          <CampaignListInfo/>
        </div>

      </div>
    </div>
  );
}

export default CampanhaGerencia;