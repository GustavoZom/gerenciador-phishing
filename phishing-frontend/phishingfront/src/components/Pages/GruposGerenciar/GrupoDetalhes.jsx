import './gruposGerencia.css';

function GrupoDetalhes({ grupo }) {
  // Dados de exemplo baseados na imagem
  const sampleMembers = [
    { id: 1, nome: 'Antonio Andrade Antunes', email: 'antonio@unipam.edu.br' },
    { id: 2, nome: 'Bruno Benjamin Bernardes', email: 'bruno@unipam.edu.br' },
    { id: 3, nome: 'Carol Carolina Cardoso', email: 'carol@unipam.edu.br' },
    { id: 4, nome: 'Daniel Denis Dutra', email: 'danie@unipam.edu.br' },
    { id: 5, nome: 'Eduardo Edilson Esteves', email: 'diedudueedu@unipam.edu.br' },
    { id: 6, nome: 'Felipe Fernandes Fagundes', email: 'felipe@unipam.edu.br' },
    { id: 7, nome: 'Gustavo Guedes Goodra', email: 'gustavo@unipam.edu.br' },
    { id: 8, nome: 'Hellas Numberto helicoptero', email: 'hellas@unipam.edu.br' },
    { id: 9, nome: 'Isis Indeed Ivem', email: 'isis@unipam.edu.br' },
    { id: 10, nome: 'Jonathan Jodocstréia', email: 'jonathan@unipam.edu.br' },
    { id: 11, nome: 'Kausm Kurina Kok', email: 'kausm@unipam.edu.br' },
  ];

  return (
    <div className="gDetailsContainer">
      <h3>Detalhes do Grupo</h3>
      {grupo ? (
        <>
          <div className="gDetailsCard">
            <p><strong>Id:</strong> {grupo.id}</p>
            <p><strong>Nome:</strong> {grupo.nome}</p>
            <p><strong>Em campanha:</strong> {grupo.emCampanha ? 'Sim' : 'Não'}</p>
            <p><strong>Descrição:</strong> {grupo.descricao || 'Funcionarios do setor administrativo do Unipam, atualizado em 02-12-2025. Não contem o Robertinho e a Claudinha'}</p>
          </div>
          
          <div className="members-container">
            <h3>Membros do Grupo</h3>
            <table className="members-list">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                {sampleMembers.map((member) => (
                  <tr key={member.id}>
                    <td>{member.id}</td>
                    <td>{member.nome}</td>
                    <td>{member.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <span className="gDetailsEmpty">Selecione um grupo à esquerda</span>
      )}
    </div>
  );
}

export default GrupoDetalhes;