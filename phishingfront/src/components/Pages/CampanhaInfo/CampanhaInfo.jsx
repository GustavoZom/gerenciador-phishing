import SideNav from "../../Modules/sidenav/SideNav"
import CampanhaInfoCard from "./CampanhaInfoCard";
import Conversao from "./Conversao";
import UserList from "./UserList";
import './campanhaInfo.css';

function CampanhaInfo(){
    return(
    <div className="mainContainer">
        <div className="hSidenav">
        </div>

        <div className="cInfoContainer">
            <div className="campanhaTitle">
                <h2>Campanhas</h2>
                <span>Nova Campanha</span>
            </div>
            <div className="cSectionContainer">
                <div className="cInfoSection left">
                    <div className="cardView">
                        <CampanhaInfoCard/>
                    </div>

                    <div className="userList">
                        <UserList/>
                    </div>
                </div>
                
                <div className="cInfoSection right">
                    <Conversao/>
                    <div className="emailTemplate">
                        <h2>E-mail</h2>
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

                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default CampanhaInfo