import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Competences from './pages/Competences';
import Portfolio from './pages/Portfolio';
import CommunityManager from './pages/CommunityManager';
import Contacter from './pages/Contacter';
import MentionLegales from './pages/MentionLegales';
import MotionPhoto from './pages/MotionPhoto';
import PhotoVideo from './pages/PhotoVideo';
import CharteGraphique from './pages/CharteGraphique';
import Affiche from './pages/Affiche';
import Nw5 from './pages/Nw5';
import ClubEco from './pages/ClubEco';
import Handisup from './pages/Handisup';
import Bibliotheque from './pages/Bibliotheque';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/motion-photo" element={<MotionPhoto />} />
        <Route path="/portfolio/photo-video" element={<PhotoVideo />} />
        <Route path="/portfolio/charte-graphique" element={<CharteGraphique />} />
        <Route path="/portfolio/affiche" element={<Affiche />} />
        <Route path="/portfolio/nw5" element={<Nw5 />} />
        <Route path="/portfolio/club-eco" element={<ClubEco />} />
        <Route path="/portfolio/handisup" element={<Handisup />} />
        <Route path="/portfolio/bibliotheque" element={<Bibliotheque />} />
        <Route path="/community-manager" element={<CommunityManager />} />
        <Route path="/contacter" element={<Contacter />} />
        <Route path="/mention-legales" element={<MentionLegales />} />
      </Routes>
    </BrowserRouter>
  );
}
