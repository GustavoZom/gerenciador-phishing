import './gruposGerencia.css';

function GrupoCampanhas({ campaigns }) {
  return (
    <div className="gCampaignsContainer">
      <h3>Campanhas Relacionadas</h3>
      <div className="gCampaignList">
        {campaigns && campaigns.length > 0 ? (
          campaigns.map((campanha) => (
            <div key={campanha.id} className="gCampaignCard">
              <h4>{campanha.nome}</h4>
              <p>{campanha.descricao}</p>
              <span className={`gCampStatus ${campanha.status}`}>
                {campanha.status === 'ativa' ? 'Ativa' : 'Encerrada'}
              </span>
            </div>
          ))
        ) : (
          <span className="gCampaignEmpty">Nenhuma campanha vinculada</span>
        )}
      </div>
    </div>
  );
}

export default GrupoCampanhas;
