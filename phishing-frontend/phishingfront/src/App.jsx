import { Routes, Route } from "react-router-dom";

import SideNav from '/src/components/Modules/sidenav/SideNav.jsx'

import Home from './components/Pages/Home/Home';

import CampanhaGerencia from './components/Pages/CampanhaFiltros/CampanhaGerencia';
import CampanhaInfo from './components/Pages/CampanhaInfo/CampanhaInfo';
import CampanhaCriar from './components/Pages/CampanhaCriar/CampanhaCriar';

import GrupoCriar from './components/Pages/GrupoCriar/GrupoCriar';
import GruposGerencia from './components/Pages/GruposGerenciar/GruposGerencia';

import TemplatesGerencia from "./components/Pages/TemplateGerenci/TemplatesGerencia";
import TemplateCriar from "./components/Pages/TemplateCriar/TemplateCriar";

function App() {
  return (
    <div className='container'>
      
      <SideNav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/campanhaGerencia" element={<CampanhaGerencia/>} />
        <Route path="/campanhaInfo" element={<CampanhaInfo />} />
        <Route path="/campanhaCriar" element={<CampanhaCriar />} />
        <Route path="/campanhaInfo" element={<CampanhaInfo />} />
        <Route path="/gruposGerencia" element={<GruposGerencia />} />
        <Route path="/gruposCriar" element={<GrupoCriar /> } />
        <Route path="/templateGerencia" element={<TemplatesGerencia />} />
        <Route path="/templateCriar" element={<TemplateCriar />} />
      </Routes>
    </div>
  );
}

export default App;