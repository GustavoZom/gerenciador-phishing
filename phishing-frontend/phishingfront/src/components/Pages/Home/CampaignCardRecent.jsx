import { BsPeople, BsGrid1X2 } from 'react-icons/bs'
import './home.css';
import Piechart from './Piechart';

function CampaignCardRecent(){
    return(
        <div className="campaignLast">
            <h2>Última Campanha Criada</h2>
        
            <div className="cCardInfo">
                <h3>Cupom Ifood Unipam 3 - dez 2025</h3>
        
                <div className="cLastSection">
        
                    <div className="cLastSectionUpper">
                        <div className="cLastSection left">
                            <div className="cLastGroup">
                                <BsPeople />
                                <span>Funcionários Unipam</span>
                            </div>
            
                            <div className="cLastTemplate">
                                <BsGrid1X2 />
                                <span>Ifood 1</span>
                            </div>
                        </div>
            
                        <div className="cLastSection right">
                            <Piechart />
                        </div>
                    </div>
            
                    <div className="cLastSectionBottom">
                        <div className="cLastSection left">
                            <span>
                                Finaliza em:
                            </span>
                            <span className='cardCounter'>
                                25 Dias
                            </span>
                        </div>
            
                        <div className="cLastSection right">
                            <span>
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

export default CampaignCardRecent