import './templatesGerencia.css';

function TemplateDetalhes({ template }) {
  return (
    <div className="gDetailsContainer">
      <h3>Detalhes do Template</h3>
      {template ? (
        <div className="gDetailsCard">
          <p><strong>Id:</strong> {template.id}</p>
          <p><strong>Nome:</strong> {template.nome}</p>
          <p><strong>Descrição:</strong> {template.descricao}</p>
          <p><strong>Tipo:</strong> {template.tipo}</p>
          <p><strong>Data de Criação:</strong> {template.dataCriacao}</p>
          <p><strong>Criador:</strong> {template.criador}</p>
        </div>
      ) : (
        <span className="gDetailsEmpty">Selecione um template à esquerda</span>
      )}
    </div>
  );
}

export default TemplateDetalhes;