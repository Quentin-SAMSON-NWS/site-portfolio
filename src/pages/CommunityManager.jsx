import home1Img from '../assets/image/Home-1.png';
import home2Img from '../assets/image/Home-2.png';
import home3Img from '../assets/image/Home-3.png';
import homeImg from '../assets/image/Home.png';
import twitterImg from '../assets/image/Twitter Desktop.png';
import linkedinImg from '../assets/image/LinkedIn Desktop.png';
import post1Img from '../assets/image/Post 1.PNG';
import post12Img from '../assets/image/Post 1.2.PNG';
import post2Img from '../assets/image/Post 2.PNG';
import post22Img from '../assets/image/Post 2.2.PNG';

const c1Glob = import.meta.glob('../assets/image/c1 *.png', { eager: true, import: 'default' });
const getC1Url = (n) => c1Glob[`../assets/image/c1 (${n}).png`];

export default function CommunityManager() {
  return (
    <>
      <h1 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4">Community manager</h1>

      <section className="flex justify-between px-14 py-12 items-center text-[#18191f] bg-[rgba(240,240,240,0.884)] w-4/5 mx-auto rounded-[25px] mt-28 mb-28 max-[800px]:flex-col">
        <div className="w-full m-2 flex justify-between flex-col">
          <h2 className="text-[#18191f] text-center text-[35px] border-b py-2 pb-[0.8em]">
            Créer et animer une communauté engagée : le cœur du métier de Community Manager
          </h2>
          <p className="p-2.5 rounded text-base">
            Dans le monde numérique d'aujourd'hui, la marque ne se contente plus de publier du contenu,
            elle a besoin de créer une communauté forte, fidèle et engagée.
          </p>
          <h2 className="w-[85%] mx-auto text-center leading-11 py-2 my-4 text-[35px] text-[#18191f]">Pourquoi créer une communauté engagée ? 💡</h2>
          <p className="p-2.5 rounded text-base">
            Les algorithmes des réseaux sociaux favorisent le contenu qui suscite des interactions authentiques.
            L'engagement n'est pas un simple chiffre. Cela permet :
          </p>
          <ul>
            <li>D'augmenter la visibilité organique (reach),</li>
            <li>De renforcer la fidélité des abonnés,</li>
            <li>De transformer des clients en ambassadeurs,</li>
            <li>De construire une image de marque humaine et proche.</li>
          </ul>
          <p>Une étude Hootsuite de 2024 montre que les marques ayant une communauté engagée génèrent 3x plus de conversions.</p>
        </div>
      </section>

      <section className="flex justify-between px-14 py-12 items-center text-[#18191f] bg-[rgba(240,240,240,0.884)] w-4/5 mx-auto rounded-[25px] mt-28 mb-28 max-[800px]:flex-col">
        <div className="w-full m-2 flex justify-between flex-col">
          <h2 className="text-[#18191f] text-center text-[35px] border-b py-2 pb-[0.8em]">Les piliers d'une communauté solide</h2>
          <p className="p-2.5 rounded text-base">Pour bâtir une relation durable, le community manager s'appuie sur plusieurs leviers :</p>
          <ol>
            <li>Définir un ton de communication authentique</li>
            <li>Créer du contenu engageant</li>
            <li>Interagir activement avec la communauté</li>
            <li>Valoriser les contenus créés par les utilisateurs (UGC)</li>
          </ol>
          <h2 className="w-[85%] mx-auto text-center leading-11 py-2 my-4 text-[35px] text-[#18191f]">🛠️ Outils utiles au Community Manager</h2>
          <table className="border-[3px] border-solid border-collapse">
            <thead><tr><th className="p-4 border-double border-2 font-bold">Outils</th><th className="p-4 border-double border-2 font-bold">Utilité principale</th></tr></thead>
            <tbody>
              <tr><th className="p-4 border-double border-2 font-bold">Canva</th><td className="text-center border-solid border-2">créer des visuels attractifs rapidement</td></tr>
              <tr><th className="p-4 border-double border-2 font-bold">Swello / Hootsuite</th><td className="text-center border-solid border-2">Programmer les publications</td></tr>
              <tr><th className="p-4 border-double border-2 font-bold">Notion</th><td className="text-center border-solid border-2">créer un calendrier éditoriale</td></tr>
              <tr><th className="p-4 border-double border-2 font-bold">Metricool</th><td className="text-center border-solid border-2">Suivre les statistiques d'engagement</td></tr>
              <tr><th className="p-4 border-double border-2 font-bold">ChatGPT</th><td className="text-center border-solid border-2">Générer des idées de posts ou de légendes</td></tr>
            </tbody>
          </table>
          <h3>Conclusion :</h3>
          <p>Créer et entretenir une communauté engagée, c'est comprendre sa cible, créer du contenu de qualité, écouter et valoriser les membres.</p>
        </div>
      </section>

      <section className="flex justify-between px-14 py-12 items-center text-[#18191f] bg-[rgba(240,240,240,0.884)] w-4/5 mx-auto rounded-[25px] mt-28 mb-28 max-[800px]:flex-col">
        <div className="w-full m-2 flex justify-between flex-col">
          <h2 className="text-[#18191f] text-center text-[35px] border-b py-2 pb-[0.8em]">Projet : kensei</h2>
          <h2 className="w-[85%] mx-auto text-center leading-11 py-2 my-4 text-[35px] text-[#18191f]">planning editoriale :</h2>
          {[1,2,3,4,5,6].map((n) => (
            <img key={n} className="max-w-fit" src={getC1Url(n)} alt={'calendrier ' + n} />
          ))}
          <p className="p-2.5 rounded text-base">Mes différentes maquettes :</p>
          <div className="flex w-[90%] justify-evenly flex-row mt-12">
            <img className="w-1/4" src={home1Img} alt="maquette 1" />
            <img className="w-1/4" src={home2Img} alt="maquette 2" />
            <img className="w-1/4" src={home3Img} alt="maquette 3" />
            <img className="w-1/4" src={homeImg} alt="maquette 4" />
          </div>
          <div className="flex w-[90%] justify-evenly flex-row mt-12">
            <img className="w-1/4" src={twitterImg} alt="Twitter" />
            <img className="w-1/4" src={linkedinImg} alt="LinkedIn" />
          </div>
          <p>Mes deux publications :</p>
          <img className="max-w-fit" src={post1Img} alt="post 1" />
          <img className="max-w-fit" src={post12Img} alt="post 1.2" />
          <img className="max-w-fit" src={post2Img} alt="post 2" />
          <img className="max-w-fit" src={post22Img} alt="post 2.2" />
        </div>
      </section>
    </>
  );
}
