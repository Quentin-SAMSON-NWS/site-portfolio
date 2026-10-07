
const cards = [
  { titre: 'Photographie', titreDos: 'Photos', items: ['Retouche photo', 'Prise de vue'], desc: "Je capture des couchers de soleil et des paysages dès que l'occasion se présente." },
  { titre: 'création graphique', titreDos: 'Graphisme', items: ['Illustrator', 'photoshop', 'charte graphique', 'logos'], desc: "Je maîtrise Illustrator, Photoshop et InDesign. J'ai conçu plusieurs logos et chartes graphiques." },
  { titre: 'Montage', titreDos: 'vidéo', items: ["After Effect/Première pro", 'miniatures'], desc: "Débutant dans le montage vidéo et motion design, j'ai réalisé des montages sur Premiere Pro et After Effects." },
  { titre: 'Intégrateur WEB', titreDos: 'Langages :', items: ['HTML', 'CSS', 'JavaScript'], desc: "Je maîtrise HTML et CSS et dispose de bases en JavaScript, MySQL et PHP." },
  { titre: 'Base de données', titreDos: 'Langages :', items: ['MySQL', 'PHP'], desc: "les bases sont acquise mais je n'ai pas une connaissance pointu de ces langages" },
  { titre: 'refonte site web', titreDos: 'CMS', items: ['WordPress'], desc: "Je maîtrise WordPress, que j'ai utilisé à plusieurs reprises pour créer, modifier et optimiser des sites." },
];

const ArrowSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pl-[80%] pb-[15px] w-5">
    <path fill="currentColor" d="M3 12q0-3.75 2.625-6.375T12 3V2q0-.3.275-.45t.525.05l3.125 2.35q.4.3.4.8t-.4.8L12.8 7.9q-.25.2-.525.05T12 7.5v-1q-2.275 0-3.888 1.613T6.5 12q0 .825.238 1.588T7.4 15q.275.4.225.863T7.2 16.6l-.85.625q-.45.35-1 .275t-.875-.55q-.725-1.075-1.1-2.325T3 12m9 9v1q0 .3-.275.45t-.525-.05l-3.125-2.35q-.4-.3-.4-.8t.4-.8L11.2 16.1q.25-.2.525-.05t.275.45v1q2.275 0 3.888-1.613T17.5 12q0-.825-.238-1.588T16.6 9q-.275-.4-.225-.862T16.8 7.4l.85-.625q.45-.35 1-.263t.875.538q.7 1.075 1.088 2.325T21 12q0 3.75-2.625 6.375T12 21" />
  </svg>
);

export default function Competences() {
  return (
    <>
      <section>
        <h2 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4" id="Competences">Compétences</h2>
        <div className="w-[90%] mx-auto flex flex-row flex-wrap justify-around p-[5%]">
          {cards.map((card, i) => (
            <div key={i} className="m-[30px_40px] w-112.5 h-[550px] [perspective:1000px] group" tabIndex={0}>
              <div className="w-full h-full text-center [transition:transform_0.8s] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                <div className="absolute flex flex-col justify-center w-full h-full [backface-visibility:hidden] rounded-[20px] bg-[#141414] text-white p-[0.5em]">
                  <h2 className="text-2xl px-[10px]">{card.titre}</h2>
                  <ArrowSvg />
                </div>
                <div className="absolute flex flex-col justify-center w-full h-full [backface-visibility:hidden] rounded-[20px] bg-[#141414] text-white p-[0.5em] [transform:rotateY(180deg)]">
                  <h3 className="text-center text-2xl">{card.titreDos}</h3>
                  <ul>{card.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
                  <p>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
