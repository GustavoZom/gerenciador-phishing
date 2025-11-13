import { useState } from 'react';
import './grupoCriar.css';

function MembersList({ selectedMembers, onMemberToggle, onRemoveMember }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Dados de exemplo - membros disponíveis
  const availableMembers = [
    { id: 1, nome: 'Antonio Andrade Antunes', email: 'antonio@unipam.edu.br' },
    { id: 2, nome: 'Bruno Benjamin Bernardes', email: 'bruno@unipam.edu.br' },
    { id: 3, nome: 'Carol Carolina Cardoso', email: 'carol@unipam.edu.br' },
    { id: 4, nome: 'Daniel Denis Dutra', email: 'daniel@unipam.edu.br' },
    { id: 5, nome: 'Eduardo Estevão Esteves', email: 'dudoulreedu@unipam.edu.br' },
    { id: 6, nome: 'Felipe Fernandes Fagundes', email: 'felipe@unipam.edu.br' },
    { id: 7, nome: 'Gustavo Guedes Goodra', email: 'gustavo@unipam.edu.br' },
    { id: 8, nome: 'Heitas Humberto Helicopiero', email: 'heitas@unipam.edu.br' },
    { id: 9, nome: 'Isis Indeed Ivem', email: 'isis@unipam.edu.br' },
    { id: 10, nome: 'Jonathan Joãoestrela', email: 'jonathan@unipam.edu.br' },
    { id: 11, nome: 'Kazan Kuriha Kek', email: 'kasan@unipam.edu.br' }
  ];

  const filteredMembers = availableMembers.filter(member =>
    member.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isMemberSelected = (memberId) => {
    return selectedMembers.some(member => member.id === memberId);
  };

  return (
    <div className="members-section">
      <div className="members-header">
        <h3>Adicionar Membros ao Grupo</h3>
        <input
          type="text"
          className="members-search"
          placeholder="Pesquisar membros..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="available-members-list">
        {filteredMembers.map(member => (
          <div key={member.id} className="member-item">
            <input
              type="checkbox"
              className="member-checkbox"
              checked={isMemberSelected(member.id)}
              onChange={(e) => onMemberToggle(member, e.target.checked)}
            />
            <div className="member-info">
              <div className="member-name">{member.nome}</div>
              <div className="member-email">{member.email}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="selected-members">
        <h4>Membros Selecionados ({selectedMembers.length})</h4>
        <div className="selected-members-list">
          {selectedMembers.length > 0 ? (
            selectedMembers.map(member => (
              <span key={member.id} className="selected-member-tag">
                {member.nome}
                <span 
                  className="remove-member"
                  onClick={() => onRemoveMember(member.id)}
                  title="Remover membro"
                >
                  ×
                </span>
              </span>
            ))
          ) : (
            <div className="empty-selection">Nenhum membro selecionado</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MembersList;