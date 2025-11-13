import SideNav from "../../Modules/sidenav/SideNav";
import './campanhaCriar.css';

function CampanhaCriar() {
  return (
    <div className="campanhaCriar">
      <div className="hSidenav">
        <SideNav />
      </div>

      <div className="cCriarContent">
        <h2>Nova Campanha</h2>

        <div className="sectionBox">
          <h3>Dados da Campanha</h3>
          <div className="formGrid">
            <div className="formGroup">
              <label>Nome da Campanha:</label>
              <input type="text" placeholder="Campanha Inverno 2025" />
            </div>

            <div className="formGroup">
              <label>Grupo:</label>
              <select>
                <option value="">Selecione...</option>
                <option>Funcionários</option>
                <option>Clientes</option>
                <option>Parceiros</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Data Disparo:</label>
              <input type="date" />
            </div>

            <div className="formGroup">
              <label>Data Fim:</label>
              <input type="date" />
            </div>

            <div className="formGroup">
              <label>Hora Disparo:</label>
              <input type="time" />
            </div>
          </div>
        </div>

        <div className="sectionBox">
          <h3>Configurar Template</h3>
          <div className="formColumn">
            <label>Assunto do e-mail:</label>
            <input type="text" placeholder="Seu pagamento está atrasado" />

            <label>Título do e-mail:</label>
            <input type="text" placeholder="Conta Suspensa" />

            <label>Corpo do e-mail:</label>
            <textarea rows="4" placeholder="Olá, Assinante..." />

            <label>Texto do Botão:</label>
            <input type="text" placeholder="ATUALIZAR AQUI" />
          </div>
        </div>

        <div className="sectionBox previewBox">
          <h3>Prévia do E-mail</h3>
          <div className="emailPreview">
            <h2 style={{ color: "#e50914" }}>NETFLIX</h2>
            <h3>Conta Suspensa.</h3>
            <p>
              Atenção,<br />
              Atualize seus dados para que você possa voltar a assistir os conteúdos.
            </p>
            <button className="btn-preview">ATUALIZAR AQUI</button>
          </div>
        </div>

        <div className="actionButtons">
          <button className="btn-cancel">Cancelar</button>
          <button className="btn-create">Criar Campanha</button>
        </div>
      </div>
    </div>
  );
}

export default CampanhaCriar;
