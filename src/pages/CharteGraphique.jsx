import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CharteGraphique() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="w-[85%] mx-auto text-[45px] leading-[44px] text-center text-white border-b border-[#f5f7fa] py-2 my-4">Ma charte graphique</h1>
        <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Bienvenue dans ma toute première charte graphique !</h2>

        <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
          <div className="flex justify-center items-center">
            <img src="/image/charte graphique pres.png" alt="Sommaire charte graphique" className="w-[450px]" />
          </div>
          <div className="m-12">
            <p className="w-full">Petit aperçu du sommaire de ma charte graphique :</p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
          <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
            <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Principes graphiques à respecter</h2>
            <p>Ce document présente les principes essentiels régissant l'utilisation du logo.</p>
            <p>Le respect de ces règles est fondamental pour assurer la cohérence de la communication.</p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
          <div className="flex rounded-[25px] p-8 w-1/2 items-center justify-center">
            <img className="flex items-center h-[350px]" src="/image/pres3.png" alt="pres" />
          </div>
          <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
            <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Un logo représentant des idées</h2>
            <ul>
              <li>Composition du logo : initiales Q et S imbriquées, formées à partir de formes géométriques.</li>
              <li>Couleurs : magenta et bleu foncé avec dégradé évoquant l'univers.</li>
              <li>Formes : référence à l'infini, la créativité est sans limites.</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
          <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
            <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Règles du logo</h2>
            <p>Règle de bon sens : Le logo ne peut pas être modifié ni étiré.</p>
            <p>Le logo doit toujours être accompagné de son carré de couleur.</p>
          </div>
          <div className="flex rounded-[25px] p-8 w-1/2 items-center justify-center">
            <img className="flex items-center h-[350px]" src="/image/logo interdit.svg" alt="" />
          </div>
        </div>

        <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
          <div className="flex rounded-[25px] p-8 w-1/2 items-center justify-center">
            <img className="flex items-center h-[650px]" src="/image/charte graphique couleur typo.png" alt="couleur typo" />
          </div>
          <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
            <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Couleurs et typographies</h2>
            <p>Les couleurs principales sont le bleu, le violet et le noir. La typographie choisie est Poppins.</p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
          <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
            <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Merci !</h2>
            <p className="text-center">Merci d'avoir pris le temps de parcourir cette charte graphique !</p>
            <div className="text-center mt-16 mb-16">
              <a href="/image/charte graphique pdf.pdf" className="btn-glow">Ma charte graphique</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
