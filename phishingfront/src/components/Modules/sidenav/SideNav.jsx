import { BsApp, BsJustify, BsInboxes, BsPeople, BsGrid1X2, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./sidenav.css";

function SideNav() {
  return (
    <div className="sidenav">
      <div className="topIcon">
        <BsJustify className="icon" />
      </div>

      <div className="midIcon">
        <Link to="/home">
          <BsApp className="icon" />
        </Link>

        <Link to="/campanhaGerencia">
          <BsInboxes className="icon" />
        </Link>
        <Link to="/campanhaInfo">
          <BsPeople className="icon" />
        </Link>
        <Link to="/gruposLista">
          <BsGrid1X2 className="icon" />
        </Link>
      </div>

      <div className="bottomIcon">
        <Link to="/perfil">
          <BsPersonCircle className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default SideNav;