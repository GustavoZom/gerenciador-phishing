import { useState } from 'react';
import './templateCriar.css';

function TemplateEditor({ content, onContentChange }) {
  const [editorContent, setEditorContent] = useState(content || '');
  const [activeFont, setActiveFont] = useState('Arial');
  const [activeSize, setActiveSize] = useState('14px');

  const handleContentChange = (newContent) => {
    setEditorContent(newContent);
    if (onContentChange) {
      onContentChange(newContent);
    }
  };

  const handleFormat = (command, value = '') => {
    document.execCommand(command, false, value);
    // Atualiza o conteúdo após o comando
    const newContent = document.querySelector('.editor-content').innerHTML;
    handleContentChange(newContent);
  };

  const handleFontChange = (font) => {
    setActiveFont(font);
    handleFormat('fontName', font);
  };

  const handleSizeChange = (size) => {
    setActiveSize(size);
    handleFormat('fontSize', size);
  };

  const fonts = ['Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Verdana'];
  const sizes = ['1', '2', '3', '4', '5', '6', '7'];

  return (
    <div className="template-editor-section">
      <h3>Template</h3>
      
      {/* Barra de ferramentas */}
      <div className="editor-toolbar">
        {/* Grupo de fontes */}
        <div className="toolbar-group">
          <select 
            className="toolbar-select"
            value={activeFont}
            onChange={(e) => handleFontChange(e.target.value)}
          >
            {fonts.map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
          
          <select 
            className="toolbar-select"
            value={activeSize}
            onChange={(e) => handleSizeChange(e.target.value)}
          >
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Grupo de formatação */}
        <div className="toolbar-group">
          <button 
            className="toolbar-button"
            onClick={() => handleFormat('bold')}
            title="Negrito"
          >
            <strong>B</strong>
          </button>
          <button 
            className="toolbar-button"
            onClick={() => handleFormat('italic')}
            title="Itálico"
          >
            <em>I</em>
          </button>
          <button 
            className="toolbar-button"
            onClick={() => handleFormat('underline')}
            title="Sublinhado"
          >
            <u>U</u>
          </button>
        </div>

        {/* Grupo de alinhamento */}
        <div className="toolbar-group">
          <button 
            className="toolbar-button"
            onClick={() => handleFormat('justifyLeft')}
            title="Alinhar à esquerda"
          >
            ⬅
          </button>
          <button 
            className="toolbar-button"
            onClick={() => handleFormat('justifyCenter')}
            title="Centralizar"
          >
            ↔
          </button>
          <button 
            className="toolbar-button"
            onClick={() => handleFormat('justifyRight')}
            title="Alinhar à direita"
          >
            ➡
          </button>
          <button 
            className="toolbar-button"
            onClick={() => handleFormat('justifyFull')}
            title="Justificar"
          >
            ≡
          </button>
        </div>

        {/* Grupo de listas */}
        <div className="toolbar-group">
          <button 
            className="toolbar-button"
            onClick={() => handleFormat('insertUnorderedList')}
            title="Lista não ordenada"
          >
            • Lista
          </button>
          <button 
            className="toolbar-button"
            onClick={() => handleFormat('insertOrderedList')}
            title="Lista ordenada"
          >
            1. Lista
          </button>
        </div>

        {/* Grupo de cores */}
        <div className="toolbar-group">
          <input 
            type="color"
            onChange={(e) => handleFormat('foreColor', e.target.value)}
            title="Cor do texto"
            style={{ width: '30px', height: '30px' }}
          />
          <button 
            className="toolbar-button"
            onClick={() => handleFormat('removeFormat')}
            title="Remover formatação"
          >
            🗑
          </button>
        </div>
      </div>

      {/* Área de edição */}
      <div
        className="editor-content"
        contentEditable
        dangerouslySetInnerHTML={{ __html: editorContent }}
        onInput={(e) => handleContentChange(e.target.innerHTML)}
        style={{ 
          fontFamily: activeFont,
          fontSize: activeSize
        }}
      />
    </div>
  );
}

export default TemplateEditor;