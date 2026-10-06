import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex flex-row flex-wrap items-center justify-between pb-2 bg-black text-white sticky top-0 z-[100]">
      <div>
        <Link to="/">
          <img className="w-[75px] h-[50px] bg-black m-4" src="/image/icone de site.svg" alt="Logo" />
        </Link>
      </div>
      <nav className="flex flex-row">
        <span id="nav-label" hidden>Navigation</span>
        <button
          id="btnOpen"
          className="topnav_open"
          aria-expanded={isOpen}
          aria-labelledby="nav-label"
          onClick={() => setIsOpen(true)}
        >
          <img src="/image/barre-de-menu.png" alt="" width="40" height="40" />
        </button>
        <div className={'topnav_menu' + (isOpen ? ' active' : '')} role="dialog" aria-labelledby="nav-label">
          <button className="topnav_close" id="btnClose" aria-label="Close" onClick={() => setIsOpen(false)}>
            <img src="/image/icons8-annuler.svg" width="28" height="28" />
          </button>
          <Link className="menu-btn" to="/" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link className="menu-btn" to="/competences" onClick={() => setIsOpen(false)}>Compétences</Link>
          <Link className="menu-btn" to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link className="menu-btn" to="/community-manager" onClick={() => setIsOpen(false)}>Community manager</Link>
          <Link className="menu-btn" to="/contacter" onClick={() => setIsOpen(false)}>Me contacter</Link>
        </div>
      </nav>
    </header>
  );
}
