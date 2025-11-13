import { useState } from 'react';
import { Link } from 'react-router-dom';
import TemplateList from "./TemplateList.jsx";
import TemplateDetalhes from "./TemplateDetalhes.jsx";
import TemplatePreview from "./TemplatePreview.jsx";
import './templatesGerencia.css';

function TemplatesGerencia() {
  const [selectedTemplate, setSelectedTemplate] = useState({
    id: 6,
    nome: "Netflix 2",
    descricao: "Template da Netflix padrão requisição de pagament, atualização de serviços etc.",
    tipo: "Phishing",
    dataCriacao: "2024-01-15",
    criador: "Admin"
  });

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="mainContainer">
      <div className="hSidenav">
      </div>

      <div className="gTemplatesContainer">
        <div className="gerenciaTitle">
          <h2>Templates</h2>
          <Link to="/criar-template">
            <span>Novo Template</span>
          </Link>
        </div>

        <div className="gSectionContainer">
          {/* Sidebar esquerda com lista de templates */}
          <div className="gTemplateSection left">
            <div className="gFilterContainer">
              <input type="text" placeholder="Id" />
              <input type="text" placeholder="Nome" />

              <select>
                <option value="">Tipo</option>
                <option value="phishing">Phishing</option>
                <option value="educacional">Educacional</option>
                <option value="notificacao">Notificação</option>
              </select>

              <div className="filterButtons">
                <button className="btn-clear">Limpar Filtros</button>
                <button className="btn-search">Pesquisar</button>
              </div>
            </div>

            <div className="gTemplatelistContainer">
              <TemplateList 
                onTemplateSelect={handleTemplateSelect}
                selectedTemplateId={selectedTemplate?.id}
              />
            </div>
          </div>

          {/* Lado direito com detalhes e preview */}
          <div className="gTemplateSection right">
            <div className="gGridRight">
              <TemplateDetalhes template={selectedTemplate} />
              <TemplatePreview template={selectedTemplate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplatesGerencia;