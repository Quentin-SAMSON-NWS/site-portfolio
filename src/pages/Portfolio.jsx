import { Link } from 'react-router-dom';
import motionPhotoImg from '../assets/image/photo (14).JPG';
import sommaireImg from '../assets/image/Sommaire.png';
import afficheNissanImg from '../assets/image/affiche nissan gtr r35 petit.png';
import afficheNw5Img from '../assets/image/AfficheNW5.jpg';
import logotypeImg from '../assets/image/Logotype.svg';
import bibliImg from '../assets/image/Bibliothèque vidéo.png';
import handisupImg from '../assets/image/handisup.png';
import photoTomImg from '../assets/image/Photo-tom.jpg';
import kenseiImg from '../assets/image/logo_Kensei.png';
import retoucheImg from '../assets/image/retouche.jpg';
import montageImg from '../assets/image/montage vidéo.jpg';
import Text from '../components/Text';

const rows = [
  [
    { image: motionPhotoImg, alt: 'lycée', titre: 'Motion design/photos', lien: '/portfolio/motion-photo',
      desc: "En cliquant sur ce bouton, vous pourrez découvrir mes différents travaux en photo et motion design." },
  ],
  [
    { image: sommaireImg, alt: 'charte graphique', titre: 'Ma charte graphique', lien: '/portfolio/charte-graphique',
      desc: "Ma première charte graphique a été l'occasion de donner naissance à ma toute première représentation visuelle." },
    { image: afficheNissanImg, alt: 'nissan gtr', titre: 'Affiche/Flyers', lien: '/portfolio/affiche',
      desc: "Ici, vous retrouverez l'ensemble de mes créations d'affiches et de flyers." },
  ],
  [
    { image: afficheNw5Img, alt: 'NW5', titre: 'Normandie Web five', lien: '/portfolio/nw5',
      desc: "Normandie Web Five est un projet réalisé par mon groupe d'étudiants pour le Bureau des Étudiants (BDE)." },
    { image: logotypeImg, alt: 'club eco', titre: 'Club eco saint Sever', lien: '/portfolio/club-eco',
      desc: "Le Club Éco Saint-Sever est une association qui nous a confié la mission de repenser leur identité visuelle." },
  ],
  [
    { image: bibliImg, alt: 'bibliothèque', titre: "Création d'une bibliothèque de vidéos/animés", lien: '/portfolio/bibliotheque',
      desc: "Nous avons créé un site d'avis sur les vidéos YouTube et les séries animées." },
    { image: handisupImg, alt: 'handisup', titre: 'Handisup', lien: '/portfolio/handisup',
      desc: "Handisup est un site visant à aider les personnes en situation de handicap à s'intégrer dans le monde du travail." },
  ],
  [
    { image: photoTomImg, alt: 'photo vidéo', titre: 'projet vidéo/photo', lien: '/portfolio/photo-video',
      desc: "Lors d'une semaine de projet, nous avons accueilli Komeo, une entreprise spécialisée dans la création de vidéos." },
  ],
];

const perso = [
  { image: kenseiImg, alt: 'Kensei', titre: 'Projet : Kensei',
    desc: "Avec un ami proche, nous avons eu l'idée de créer une marque pour les joueurs compétitifs." },
  { image: retoucheImg, alt: 'retouche', titre: 'Retouche Photo',
    desc: "Le monde de la photographie m'inspire de plus en plus, car il permet de capturer et de préserver un instant précis." },
  { image: montageImg, alt: 'réseaux', titre: 'Alimentation des réseaux sociaux (tik tok, Instagram, Youtube)',
    desc: "Le monde des réseaux sociaux est une source d'inspiration lorsqu'il est utilisé de la bonne manière." },
  { image: montageImg, alt: 'montage', titre: 'Montages Vidéos',
    desc: "Le montage vidéo est une compétence que j'ai envie d'apprendre, car elle est essentielle pour réaliser de bonnes vidéos." },
];

export default function Portfolio() {
  return (
    <>
      <h2 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4" id="Portfolio">Portfolio</h2>
      <div id="Portfolio">
        {rows.map((row, ri) => (
          <div key={ri} className="flex justify-between items-center max-[728px]:flex-col max-[728px]:items-center">
            {row.map((p, i) => (
              <div key={i} className="flex justify-evenly w-[85%] rounded-[26px] mx-[2.5em] bg-[#131010] px-14 py-12 mt-10 mb-12 items-center text-white flex-col max-[850px]:p-5 max-[728px]:flex-col max-[728px]:items-center">
                <div className="w-2/5 flex justify-center m-2 max-[850px]:w-full">
                  <img src={p.image} alt={p.alt} className="w-full max-[850px]:max-w-[80%]" />
                </div>
                <div className="w-4/5 m-2 flex justify-between flex-col p-10 text-center max-[850px]:w-full max-[728px]:w-3/4">
                  <h2 className="text-[35px] text-center text-[#f5f7fa] border-b border-[#f5f7fa] py-2 pb-[0.8em]">{p.titre}</h2>
                  <Text>{p.desc}</Text>
                  <Link to={p.lien} className="w-[90%] max-w-125 h-15 flex items-center justify-center text-center text-[aliceblue] border-2 border-[#ffffff22] rounded-[15px] my-[0.5em] mx-auto bg-[#0f0e0e] transition-all duration-300 ease-in-out text-base relative z-1 overflow-hidden hover:border-transparent hover:[background:linear-gradient(#0f0e0e,#0f0e0e)_padding-box,linear-gradient(145deg,#e81cff,#40c9ff)_border-box] hover:scale-[1.03] hover:[animation:pulse-glow_1.5s_infinite_ease-in-out]">En savoir plus</Link>
                </div>
              </div>
            ))}
          </div>
        ))}
        <h3 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4" id="Projet">Projet</h3>
        {perso.map((p, i) => (
          <div key={i} className="flex justify-evenly w-[85%] rounded-[26px] mx-[2.5em] bg-[#131010] px-14 py-12 mt-10 mb-12 items-center text-white flex-col max-[728px]:flex-col max-[728px]:items-center">
            <div className="w-2/5 flex justify-center m-2">
              <img src={p.image} alt={p.alt} className="w-full" />
            </div>
            <div className="w-4/5 m-2 flex justify-between flex-col p-10 text-center max-[728px]:w-3/4">
              <h2 className="text-[35px] text-center text-[#f5f7fa] border-b border-[#f5f7fa] py-2 pb-[0.8em]">{p.titre}</h2>
              <Text>{p.desc}</Text>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
