import { useState } from 'react';
import { Link } from 'react-router-dom';
import GroupList from '../GruposGerenciar/GroupList.jsx';
import MembersList from "./MembersList.jsx";
import './grupoCriar.css';

function GrupoCriar() {
  const [groupData, setGroupData] = useState({
    nome: '',
    descricao: ''
  });

  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGroupData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMemberToggle = (member, isSelected) => {
    if (isSelected) {
      setSelectedMembers(prev => [...prev, member]);
    } else {
      setSelectedMembers(prev => prev.filter(m => m.id !== member.id));
    }
  };

  const handleRemoveMember = (memberId) => {
    setSelectedMembers(prev => prev.filter(m => m.id !== memberId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar o grupo
    console.log('Dados do grupo:', groupData);
    console.log('Membros selecionados:', selectedMembers);
    alert('Grupo criado com sucesso!');
  };

  const handleCancel = () => {
    // Lógica para cancelar e voltar
    if (window.confirm('Tem certeza que deseja cancelar? As alterações serão perdidas.')) {
      window.history.back();
    }
  };

  return (
    <div className="mainContainer">
      <div className="hSidenav">
      </div>

      <div className="gCreateContainer">
        <div className="createTitle">
          <h2>Criar Novo Grupo</h2>
          <Link to="/grupos" className="btn-back">
            ← Voltar para Grupos
          </Link>
        </div>

        <div className="gCreateSection">
          {/* Sidebar com lista de grupos (igual à página anterior) */}
          <div className="gCreateSidebar">
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
              <GroupList />
            </div>
          </div>

          {/* Formulário de criação */}
          <div className="gCreateForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome do Grupo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={groupData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite o nome do grupo"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="descricao">Descrição do Grupo</label>
                <textarea
                  id="descricao"
                  name="descricao"
                  value={groupData.descricao}
                  onChange={handleInputChange}
                  placeholder="Digite a descrição do grupo"
                  rows="4"
                />
              </div>

              {/* Componente de lista de membros */}
              <MembersList
                selectedMembers={selectedMembers}
                onMemberToggle={handleMemberToggle}
                onRemoveMember={handleRemoveMember}
              />

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={handleCancel}>
                  Cancelar
                </button>
                <button type="submit" className="btn-save">
                  Criar Grupo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrupoCriar;