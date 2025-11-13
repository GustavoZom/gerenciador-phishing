import "./campanhaInfo.css";

function UserList(){
    return(
        <>
      <div className="userListHeader">
        <span>Id</span>
        <span>Nome</span>
        <span>E-mail</span>
        <span>Clicou</span>
      </div>

      <div className="userListContainer">
        <div className="userCard">
          <span>1</span>
          <span>Antonio Andrade Antunes</span>
          <span>antonio@unipam.edu.br</span>
          <span className="status nao">Não</span>
        </div>

        <div className="userCard">
          <span>2</span>
          <span>Bruno Benjamim Bernardes</span>
          <span>bruno@unipam.edu.br</span>
          <span className="status sim">Sim</span>
        </div>

        <div className="userCard">
          <span>3</span>
          <span>Carol Carolina Cardoso</span>
          <span>carol@unipam.edu.br</span>
          <span className="status nao">Não</span>
        </div>
      </div>
    </>
    )
}

export default UserList