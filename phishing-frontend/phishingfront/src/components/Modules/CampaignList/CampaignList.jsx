import './campaignList.css'

function CampaignList(){
    return(
        <>
            <div className="cardHeader">
                <span>Id</span>
                <span>Nome</span>
                <span>Grupo</span>
                <span>Template</span>
                <span>Status</span>
            </div>

            <div className="campaignList">
                <div className="campaignCard">
                    <span>21</span>
                    <span>Cupom Ifood Unipam 3 - dez 2025</span>
                    <span>Funcionarios Unipam</span>
                    <span>Ifood 1</span>
                    <span>Ativo</span>
                </div>

                <div className="campaignCard">
                    <span>21</span>
                    <span>Cupom Ifood Unipam 3 - dez 2025</span>
                    <span>Funcionarios Unipam</span>
                    <span>Ifood 1</span>
                    <span>Ativo</span>
                </div>
            </div>
        </>

    )
}

export default CampaignList