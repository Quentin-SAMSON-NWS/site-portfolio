import { useState, useEffect } from 'react';

const typewriterTexts = ["L'art numérique"];
const carouselImages = [
  '/image/1.png', '/image/2.png', '/image/3.png',
  '/image/4.png', '/image/5.png', '/image/6.png',
  '/image/7.png', '/image/8.png', '/image/9.png',
];

const btnGlowClass = "w-[90%] max-w-[500px] h-[60px] flex items-center justify-center text-center text-[aliceblue] border-2 border-[#ffffff22] rounded-[15px] my-[0.5em] mx-auto bg-[#0f0e0e] transition-all duration-300 ease-in-out text-base relative z-[1] overflow-hidden hover:border-transparent hover:[background:linear-gradient(#0f0e0e,#0f0e0e)_padding-box,linear-gradient(145deg,#e81cff,#40c9ff)_border-box] hover:scale-[1.03] hover:[animation:pulse-glow_1.5s_infinite_ease-in-out]";

export default function Home() {
  const [typewriterText, setTypewriterText] = useState('');
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let timeoutId;
    function typeWriter() {
      if (charIndex < typewriterTexts[textIndex].length) {
        currentText += typewriterTexts[textIndex].charAt(charIndex);
        setTypewriterText(currentText);
        charIndex++;
        timeoutId = setTimeout(typeWriter, 100);
      } else {
        timeoutId = setTimeout(eraseText, 1000);
      }
    }
    function eraseText() {
      if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setTypewriterText(currentText);
        timeoutId = setTimeout(eraseText, 70);
      } else {
        textIndex = (textIndex + 1) % typewriterTexts.length;
        charIndex = 0;
        timeoutId = setTimeout(typeWriter, 500);
      }
    }
    timeoutId = setTimeout(typeWriter, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  function prevSlide() {
    setActiveSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  }
  function nextSlide() {
    setActiveSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  }

  return (
    <>
      {/* Hero */}
      <section>
        <div className="w-full flex justify-evenly items-center text-white py-36 max-[728px]:flex-col max-[728px]:text-center max-[728px]:items-center">
          <div className="relative flex justify-center flex-col items-center w-[400px] h-[400px] rounded-[75%] overflow-hidden bg-black after:content-[''] after:absolute after:z-[-1] after:w-[450px] after:h-[450px] after:rounded-[75%] after:bg-[linear-gradient(-45deg,#f7aef8_0%,#3772ff_100%)] after:blur-[30px]">
            <img
              className="absolute top-[35%] left-[25%] -translate-x-[32%] -translate-y-[20%] w-[300px]"
              src="/image/QUENTIN-Photoroom.png"
              alt="Quentin Samson"
            />
          </div>
          <div className="w-[45%] max-[728px]:w-[90%] max-[728px]:p-0">
            <h1 className="text-[36px] mb-0">Quentin Samson</h1>
            <h1 className="text-[36px] mt-[0.2em] mb-0">
              Bienvenue dans <span className="text-[#e81cff] [text-shadow:0_0_10px_#e81cff]"> mon monde Créatif ! </span>
            </h1>
            <div>
              <h2>
                Passionée par <span className="text-[#e81cff] [text-shadow:0_0_10px_#e81cff]">{typewriterText}</span>
                <label>|</label>
              </h2>
            </div>
            <p className="text-base">
              J'explore les limites de l'imaginaire à travers des créations
              vibrantes et innovantes. Mon portfolio reflète ma quête d'harmonie
              entre technologie et émotion, transformant chaque idée en une
              œuvre unique. Bonne découverte !
            </p>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section>
        <section className="[background:linear-gradient(#0f0e0e,#0f0e0e)_padding-box,linear-gradient(145deg,transparent_35%,#e81cff,#40c9ff)_border-box] border-2 border-transparent flex w-[85%] text-sm text-[whitesmoke] gap-5 rounded-[26px] mx-auto mt-20 mb-32 flex-row max-[728px]:flex-col max-[728px]:text-center max-[728px]:items-center">
          <div className="w-1/4 mx-auto flex justify-center flex-col items-center max-[728px]:w-3/4">
            <img className="max-h-[300px]" src="/image/P1026672.JPG" alt="Quentin" />
            <h2 id="a-propos" className="text-[36px] text-white text-center">À propos de moi</h2>
            <h2>Découvrez qui je suis !</h2>
            <a href="/image/CV.pdf" className={btnGlowClass}>Mon CV</a>
          </div>
          <div className="w-3/4 text-base text-left max-[728px]:w-[90%] max-[728px]:text-center">
            <p>Bonjour et bienvenue 👋,</p>
            <p>Je m'appelle Quentin Samson, étudiant à la Normandie Web School, passioné par la création numérique.</p>
            <p>Actuellement à la recherche d'une alternance en communication digitale ou création graphique.</p>
            <p>Ce portfolio est le reflet de mon univers : structuré, créatif et humain.</p>
            <p>En pleine démarche de développement personnel, je mets un point d'honneur à renforcer mes compétences techniques.</p>
            <p>👉 Vous êtes recruteur, freelance, entrepreneur ou simplement curieux ? N'hésitez pas à explorer mon univers !</p>
          </div>
        </section>
      </section>

      {/* Parcours scolaire */}
      <section>
        <div>
          <h2 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4">Mon parcours scolaire</h2>
        </div>

        <section className="flex justify-between px-14 py-12 my-10 items-center text-white max-[800px]:flex-col max-[728px]:flex-col">
          <div className="w-2/5 flex justify-center m-2">
            <img src="/image/lycée.jpg" alt="lycée" className="w-full" />
          </div>
          <div className="w-4/5 m-2 flex justify-between flex-col p-10 text-center max-[728px]:w-3/4">
            <h2 className="text-[35px] text-center text-[#f5f7fa] border-b border-[#f5f7fa] py-2 pb-[0.8em]">Lycée Delamare Debouteville</h2>
            <p>J'ai obtenu mon baccalauréat au lycée Delamare Deboutteville, avec pour spécialités Mathématiques et NSI.</p>
          </div>
        </section>

        <section className="flex justify-between px-14 py-12 my-10 items-center text-[#18191f] bg-[rgba(240,240,240,0.884)] w-4/5 mx-auto rounded-[25px] max-[800px]:flex-col max-[728px]:flex-col">
          <div className="w-4/5 m-2 flex justify-between flex-col p-10 text-center max-[728px]:w-3/4">
            <h2 className="text-[35px] text-[#18191f] text-center border-b border-[#18191f] py-2 pb-[0.8em]">Licence informatique</h2>
            <p className="p-[10px] rounded text-base">Après l'obtention de mon baccalauréat, j'ai choisi d'intégrer cette licence afin de poursuivre ma passion pour l'informatique.</p>
          </div>
          <div className="w-2/5 flex justify-center m-2">
            <img src="/image/licence.png" alt="licence" className="w-full" />
          </div>
        </section>

        <section className="flex justify-between px-14 py-12 my-10 items-center text-white max-[800px]:flex-col max-[728px]:flex-col">
          <div className="w-2/5 flex justify-center m-2">
            <img src="/image/NWS.jpg" alt="NWS" className="w-full" />
          </div>
          <div className="w-4/5 m-2 flex justify-between flex-col p-10 text-center max-[728px]:w-3/4">
            <h2 className="text-[35px] text-center text-[#f5f7fa] border-b border-[#f5f7fa] py-2 pb-[0.8em]">Normandie Web School</h2>
            <p className="p-[10px] rounded text-base">J'ai décidé de poursuivre mes études au sein de cette école pour des projets concrets et développer ma créativité.</p>
          </div>
        </section>
      </section>

      {/* Carrousel */}
      <div>
        <div className="flex justify-evenly w-[85%] rounded-[26px] mx-auto bg-[#131010] px-14 py-12 mt-10 mb-12 items-center text-white max-lg:flex-col max-lg:w-[90%] max-lg:p-6">
          <div className="flex flex-col justify-center p-[14px] w-2/5 max-lg:w-full max-lg:text-center max-lg:mb-5">
            <h2 className="w-[85%] mx-auto text-center text-[#f5f7fa] leading-11 py-2 my-4 text-[35px]">Interview d'une alternante en communication digitale</h2>
            <p>Ici, vous allez découvrir une interview d'une alternante en communication digitale.</p>
          </div>
          <div className="relative h-screen w-[50vw] overflow-hidden max-lg:w-full max-[480px]:h-[40vh]">
            <button className="absolute border-none outline-none text-[2.6rem] z-[2] cursor-pointer text-[aliceblue] -translate-y-1/2 top-1/2 p-[10px] bg-transparent left-[10px]" id="prev" onClick={prevSlide}>&#10096;</button>
            <button className="absolute border-none outline-none text-[2.6rem] z-[2] cursor-pointer text-[aliceblue] -translate-y-1/2 top-1/2 p-[10px] bg-transparent right-[10px]" id="next" onClick={nextSlide}>&#10097;</button>
            <ul className="relative h-full w-full m-0 p-0 list-none">
              {carouselImages.map((src, index) => (
                <li key={index} className={`absolute top-0 left-0 h-full w-full list-none flex justify-center transition-opacity duration-500 ease-in-out ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={src} alt={'slide ' + (index + 1)} className="block w-full h-full object-cover" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
