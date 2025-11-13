import './templatesGerencia.css';

function TemplatePreview({ template }) {
  const renderTemplateContent = () => {
    if (!template) return null;

    switch (template.id) {
      case 6: // Netflix 2
        return (
          <div className="template-content">
            <div className="template-header">
              <h1>NETFLIX</h1>
            </div>
            <div className="template-body">
              <h2>Conta Suspensa.</h2>
              <p>Atenção,</p>
              <p>Atualize seus dados para que você possa voltar a assistir e evite o cancelamento.</p>
              <a href="#" className="template-button">ATUALIZE AQUI</a>
            </div>
            <div className="template-footer">
              <p>Netflix &copy; 2024. Todos os direitos reservados.</p>
            </div>
          </div>
        );
      
      case 5: // iFood 1
        return (
          <div className="template-content">
            <div className="template-header" style={{ borderBottomColor: '#ea1d2c' }}>
              <h1 style={{ color: '#ea1d2c' }}>iFood</h1>
            </div>
            <div className="template-body">
              <h2>Promoção Especial!</h2>
              <p>Você tem um cupom de desconto esperando por você.</p>
              <a href="#" className="template-button" style={{ backgroundColor: '#ea1d2c' }}>
                RESGATAR CUPOM
              </a>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="template-content">
            <p>Preview do template <strong>{template.nome}</strong></p>
            <p>Este é um exemplo de conteúdo do template selecionado.</p>
          </div>
        );
    }
  };

  return (
    <div className="gPreviewContainer">
      <h3>Preview do Template</h3>
      <div className="template-preview">
        {template ? (
          renderTemplateContent()
        ) : (
          <div className="preview-empty">
            Selecione um template à esquerda para visualizar o preview
          </div>
        )}
      </div>
    </div>
  );
}

export default TemplatePreview;