import { BsPeople, BsGrid1X2 } from 'react-icons/bs'
import './home.css';
import Piechart from './Piechart';

function CampaignCardDeadline(){
    return(
        <div className="campaignLast">
            <h2>Campanha Proxima ao Fim</h2>
        
            <div className="cCardInfo">
                <h3>Pagamento Netflix 3 - out 2025</h3>
        
                <div className="cLastSection">
        
                    <div className="cLastSectionUpper">
                        <div className="cLastSection left">
                            <div className="cLastGroup">
                                <BsPeople />
                                <span>Alunos Unipam</span>
                            </div>
            
                            <div className="cLastTemplate">
                                <BsGrid1X2 />
                                <span>Netflix 2</span>
                            </div>
                        </div>
            
                        <div className="cLastSection right">
                            <Piechart />
                        </div>
                    </div>
            
                    <div className="cLastSectionBottom">
                        <div className="cLastSection left">
                            <span className="cLastDeadline">
                                Finaliza em:
                            </span>
                            <span className='cardCounter'>
                                5 dias
                            </span>
                        </div>
            
                        <div className="cLastSection right">
                            <span className="cLastConversion">
                                Taxa de conversão:
                            </span>
                            <span className='cardCounter'>
                                78%
                            </span>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    )
}

export default CampaignCardDeadline