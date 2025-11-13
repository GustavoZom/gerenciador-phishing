import { useState } from 'react';
import { Link } from 'react-router-dom';
import TemplateList from "./TemplateList.jsx";
import TemplateEditor from "./TemplateEditor.jsx";
import './templateCriar.css';

function TemplateCriar() {
  const [templateData, setTemplateData] = useState({
    nome: '',
    descricao: '',
    tipo: 'phishing',
    conteudo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTemplateData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContentChange = (content) => {
    setTemplateData(prev => ({
      ...prev,
      conteudo: content
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar o template
    console.log('Dados do template:', templateData);
    alert('Template criado com sucesso!');
  };

  const handleCancel = () => {
    if (window.confirm('Tem certeza que deseja cancelar? As alterações serão perdidas.')) {
      window.history.back();
    }
  };

  const handleTemplateSelect = (template) => {
    // Opcional: carregar dados do template selecionado para edição
    console.log('Template selecionado:', template);
  };

  return (
    <div className="mainContainer">
      <div className="hSidenav">
      </div>

      <div className="gCreateTemplateContainer">
        <div className="createTitle">
          <h2>Criar Novo Template</h2>
          <Link to="/templates" className="btn-back">
            ← Voltar para Templates
          </Link>
        </div>

        <div className="gCreateSection">
          {/* Sidebar esquerda com lista de templates existentes */}
          <div className="gCreateSidebar">
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
              <TemplateList onTemplateSelect={handleTemplateSelect} />
            </div>
          </div>

          {/* Lado direito com formulário e editor */}
          <div className="gCreateForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome do Template</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={templateData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite o nome do template"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="descricao">Descrição do Template</label>
                <textarea
                  id="descricao"
                  name="descricao"
                  value={templateData.descricao}
                  onChange={handleInputChange}
                  placeholder="Digite a descrição do template"
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="tipo">Tipo de Template</label>
                <select 
                  id="tipo"
                  name="tipo" 
                  value={templateData.tipo} 
                  onChange={handleInputChange}
                >
                  <option value="phishing">Phishing</option>
                  <option value="educacional">Educacional</option>
                  <option value="notificacao">Notificação</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>

              {/* Editor de Template */}
              <TemplateEditor 
                content={templateData.conteudo}
                onContentChange={handleContentChange}
              />

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={handleCancel}>
                  Cancelar
                </button>
                <button type="submit" className="btn-save">
                  Criar Template
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateCriar;