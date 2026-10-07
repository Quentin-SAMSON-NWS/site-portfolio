
export default function CharteGraphique() {
  return (
    <>
      <h1 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4">Ma charte graphique</h1>
      <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Bienvenue dans ma toute première charte graphique !</h2>

      <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
        <div className="flex justify-center items-center">
          <img src="/image/charte graphique pres.png" alt="Sommaire charte graphique" className="w-112.5" />
        </div>
        <div className="m-12">
          <p className="w-full">Petit aperçu du sommaire de ma charte graphique :</p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
        <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
          <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Principes graphiques à respecter</h2>
          <p>Ce document présente les principes essentiels régissant l'utilisation du logo.</p>
          <p>Le respect de ces règles est fondamental pour assurer la cohérence de la communication.</p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
        <div className="flex rounded-[25px] p-8 w-1/2 items-center justify-center">
          <img className="flex items-center h-87.5" src="/image/pres3.png" alt="pres" />
        </div>
        <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
          <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Un logo représentant des idées</h2>
          <ul>
            <li>Composition du logo : initiales Q et S imbriquées, formées à partir de formes géométriques.</li>
            <li>Couleurs : magenta et bleu foncé avec dégradé évoquant l'univers.</li>
            <li>Formes : référence à l'infini, la créativité est sans limites.</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
        <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
          <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Règles du logo</h2>
          <p>Règle de bon sens : Le logo ne peut pas être modifié ni étiré.</p>
          <p>Le logo doit toujours être accompagné de son carré de couleur.</p>
        </div>
        <div className="flex rounded-[25px] p-8 w-1/2 items-center justify-center">
          <img className="flex items-center h-87.5" src="/image/logo interdit.svg" alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
        <div className="flex rounded-[25px] p-8 w-1/2 items-center justify-center">
          <img className="flex items-center h-162.5" src="/image/charte graphique couleur typo.png" alt="couleur typo" />
        </div>
        <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
          <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Couleurs et typographies</h2>
          <p>Les couleurs principales sont le bleu, le violet et le noir. La typographie choisie est Poppins.</p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
        <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
          <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Merci !</h2>
          <p className="text-center">Merci d'avoir pris le temps de parcourir cette charte graphique !</p>
          <div className="text-center mt-16 mb-16">
            <a href="/image/charte graphique pdf.pdf" className="w-[90%] max-w-[500px] h-[60px] flex items-center justify-center text-center text-[aliceblue] border-2 border-[#ffffff22] rounded-[15px] my-[0.5em] mx-auto bg-[#0f0e0e] transition-all duration-300 ease-in-out text-base relative z-[1] overflow-hidden hover:border-transparent hover:[background:linear-gradient(#0f0e0e,#0f0e0e)_padding-box,linear-gradient(145deg,#e81cff,#40c9ff)_border-box] hover:scale-[1.03] hover:[animation:pulse-glow_1.5s_infinite_ease-in-out]">Ma charte graphique</a>
          </div>
        </div>
      </div>
    </>
  );
}
