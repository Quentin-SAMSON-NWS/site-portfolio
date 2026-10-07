import { useState } from 'react';
import { Link } from 'react-router-dom';

const menuBtnClass = "relative w-30 h-10 bg-[#080708] flex items-center text-white justify-center border-0 gap-3 rounded-lg cursor-pointer m-[1em] text-center before:content-[''] before:absolute before:inset-0 before:left-[-4px] before:top-[-1px] before:m-auto before:w-32 before:h-12 before:rounded-[10px] before:bg-[linear-gradient(-45deg,#f7aef8_0%,#3772ff_100%)] before:-z-10 before:pointer-events-none before:transition-all before:duration-[600ms] before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] after:content-[''] after:-z-1 after:absolute after:inset-0 after:bg-[linear-gradient(-45deg,#f7aef8_0%,#3772ff_100%)] after:scale-95 after:blur-[20px] hover:after:blur-[30px] hover:before:-rotate-2 hover:before:scale-95";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex flex-row flex-wrap items-center justify-between pb-2 bg-black text-white sticky top-0 z-100">
      <div>
        <Link to="/">
          <img className="w-18.75 h-12.5 bg-black m-4" src="/img/icone-de-site.svg" alt="Logo" />
        </Link>
      </div>
      <nav className="flex flex-row">
        <span id="nav-label" hidden>Navigation</span>
        <button
          id="btnOpen"
          className="bg-transparent border-0 p-0 min-[904px]:hidden!"
          aria-expanded={isOpen}
          aria-labelledby="nav-label"
          onClick={() => setIsOpen(true)}
        >
          <img src="/img/barre-de-menu.png" alt="" width="40" height="40" />
        </button>
        <div
          className={[
            'min-[904px]:flex min-[904px]:flex-row min-[904px]:transition-transform min-[904px]:duration-500',
            'max-[903px]:flex max-[903px]:flex-col max-[903px]:items-center max-[903px]:justify-center max-[903px]:fixed max-[903px]:inset-0 max-[903px]:bg-[#080708] max-[903px]:z-999 max-[903px]:transition-[transform,opacity] max-[903px]:duration-300 max-[903px]:ease-in-out',
            isOpen
              ? 'max-[903px]:translate-x-0 max-[903px]:pointer-events-auto max-[903px]:opacity-100'
              : 'max-[903px]:translate-x-full max-[903px]:pointer-events-none max-[903px]:opacity-0',
          ].join(' ')}
          role="dialog"
          aria-labelledby="nav-label"
        >
          <button
            className="hidden max-[903px]:block max-[903px]:ms-auto bg-transparent border-0 p-0"
            id="btnClose"
            aria-label="Close"
            onClick={() => setIsOpen(false)}
          >
            <img src="/img/icons8-annuler.svg" width="28" height="28" />
          </button>
          <Link className={menuBtnClass} to="/" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link className={menuBtnClass} to="/competences" onClick={() => setIsOpen(false)}>Compétences</Link>
          <Link className={menuBtnClass} to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link className={menuBtnClass} to="/community-manager" onClick={() => setIsOpen(false)}>Community manager</Link>
          <Link className={menuBtnClass} to="/contacter" onClick={() => setIsOpen(false)}>Me contacter</Link>
        </div>
      </nav>
    </header>
  );
}
