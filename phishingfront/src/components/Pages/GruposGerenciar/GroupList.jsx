import './gruposGerencia.css';

function GroupList({ groups, onGroupSelect, selectedGroupId }) {
  // Dados de exemplo
  const sampleGroups = [
    { id: 11, nome: 'Funcionarios Unipam', emCampanha: true },
    { id: 10, nome: 'Alunos Sistemas', emCampanha: true },
    { id: 9, nome: 'Funcionarios Unipam', emCampanha: true },
    { id: 8, nome: 'Funcionarios Unipam', emCampanha: false },
    { id: 7, nome: 'Funcionarios Unipam', emCampanha: true },
    { id: 6, nome: 'Alunos Sistemas', emCampanha: false },
    { id: 5, nome: 'Funcionarios Unipam', emCampanha: true },
    { id: 4, nome: 'Alunos Sistemas', emCampanha: false },
    { id: 3, nome: 'Funcionarios Unipam', emCampanha: false },
    { id: 2, nome: 'Funcionarios Unipam', emCampanha: false },
    { id: 1, nome: 'Funcionarios Unipam', emCampanha: false },
  ];

  const groupsToDisplay = groups || sampleGroups;

  return (
    <table className="group-list">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Em campanha</th>
        </tr>
      </thead>
      <tbody>
        {groupsToDisplay.map((group) => (
          <tr 
            key={group.id}
            onClick={() => onGroupSelect && onGroupSelect(group)}
            style={{ 
              backgroundColor: selectedGroupId === group.id ? '#e6f2ff' : 'transparent',
              cursor: onGroupSelect ? 'pointer' : 'default'
            }}
          >
            <td>{group.id}</td>
            <td>{group.nome}</td>
            <td>
              <span className={`status-indicator ${group.emCampanha ? 'status-active' : 'status-inactive'}`}></span>
              {group.emCampanha ? 'Sim' : 'Não'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GroupList;