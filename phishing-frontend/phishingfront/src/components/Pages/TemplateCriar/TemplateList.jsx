import './templateCriar.css';

function TemplateList({ onTemplateSelect, selectedTemplateId }) {
  const templates = [
    { id: 6, nome: 'Netflix 2', tipo: 'Phishing', dataCriacao: '2024-01-15' },
    { id: 5, nome: 'iFood 1', tipo: 'Phishing', dataCriacao: '2024-01-10' },
    { id: 4, nome: 'Banco do Brasil 1', tipo: 'Phishing', dataCriacao: '2024-01-08' },
    { id: 3, nome: 'Netflix 1', tipo: 'Phishing', dataCriacao: '2024-01-05' },
    { id: 2, nome: 'Steam 1', tipo: 'Phishing', dataCriacao: '2024-01-03' },
    { id: 1, nome: 'Mercado Livre 1', tipo: 'Phishing', dataCriacao: '2024-01-01' },
  ];

  return (
    <table className="template-list">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {templates.map((template) => (
          <tr 
            key={template.id} 
            onClick={() => onTemplateSelect && onTemplateSelect(template)}
            style={{ 
              backgroundColor: selectedTemplateId === template.id ? '#e6f2ff' : 'transparent'
            }}
          >
            <td>{template.id}</td>
            <td>{template.nome}</td>
            <td>{template.tipo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TemplateList;