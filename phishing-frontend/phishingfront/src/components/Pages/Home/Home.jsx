import { BsFileEarmarkPlay, BsFileEarmarkRuled, BsFileEarmarkCheck, BsPeople, BsGrid1X2 } from 'react-icons/bs'
import SideNav from '/src/components/Modules/sidenav/SideNav.jsx'
import CampaignCardDeadline from './CampaignCardDeadline';
import CampaignCardRecent from './CampaignCardRecent';
import CampaignList from '../../Modules/CampaignList/CampaignList';
import './home.css';

function Home(){
    return(
        <div className="mainContainer">

            <div className="hContent">
                <div className="hSection left">

                    <div className="generalView">
                        <h2>Visão Geral</h2>
                        <div className="campanhaInfo">
                            <div className="cItem">
                                <div className='campanhaIcon ' style={{ backgroundColor: "#B6DDF0" }}> 
                                    <BsFileEarmarkPlay/>
                                </div>
                                <h4>Campanhas Ativas</h4>
                                <h3>3</h3>
                            </div>

                            <div className="cItem" >
                                <div className="campanhaIcon" style={{ backgroundColor: "#F0E4B6"}}>
                                    <BsFileEarmarkRuled/>
                                </div>
                                <h4>Total de Campanhas</h4>
                                <h3>3</h3>
                            </div>

                            <div className="cItem" >
                                <div className="campanhaIcon" style={{ backgroundColor: "#F0B6C8"}}>
                                    <BsFileEarmarkCheck/>
                                </div>
                            
                                <h4>Campanhas Finalizadas</h4>
                                <h3>3</h3>
                            </div>
                        </div>
                    </div>

                    <div className="campaign">
                        <h2>Campanhas</h2>
                        <CampaignList/>
                    </div>
                    
                </div>
                <div className="hSection right">
                    <div className="cardContainer">
                        <CampaignCardRecent/>
                        <CampaignCardDeadline/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home