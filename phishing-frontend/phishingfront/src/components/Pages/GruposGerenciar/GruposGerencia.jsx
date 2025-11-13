import { useState } from 'react';
import GroupList from "./GroupList.jsx";
import GrupoDetalhes from "./GrupoDetalhes.jsx";
import GrupoCampanhas from "./GrupoCampanhas.jsx";
import './gruposGerencia.css';

function GruposGerencia() {
  const [selectedGroup, setSelectedGroup] = useState({
    id: 11,
    nome: "Funcionarios Unipam",
    emCampanha: true,
    descricao: "Funcionarios do setor administrativo do Unipam, atualizado em 02-12-2025. Não contem o Robertinho e a Claudinha"
  });

  const relatedCampaigns = [
    { id: 1, nome: "Campanha Fevereiro 2025", descricao: "Simulação de phishing Netflix", status: "ativa" },
    { id: 2, nome: "Campanha Outubro Rosa", descricao: "Simulação de login falso GOV.BR", status: "encerrada" }
  ];

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="mainContainer">
      <div className="hSidenav">
      </div>

      <div className="gGerenciaContainer">
        <div className="gerenciaTitle">
          <h2>Grupos</h2>
          <span>Novo Grupo</span>
        </div>

        <div className="gSectionContainer">

          <div className="gGrupoSection left">
            <div className="gFilterContainer">
              <input type="text" placeholder="Id" />
              <input type="text" placeholder="Nome" />

              <select>
                <option value="">Status</option>
                <option value="campanha">Em campanha</option>
                <option value="semCampanha">Sem campanha</option>
              </select>

              <div className="filterButtons">
                <button className="btn-clear">Limpar Filtros</button>
                <button className="btn-search">Pesquisar</button>
              </div>
            </div>

            <div className="gGrouplistContainer">
              <GroupList 
                onGroupSelect={handleGroupSelect} 
                selectedGroupId={selectedGroup?.id}
              />
            </div>
          </div>

          <div className="gGrupoSection right">
            <div className="gGridRight">
              <GrupoDetalhes grupo={selectedGroup} />
              <GrupoCampanhas campanhas={relatedCampaigns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GruposGerencia;