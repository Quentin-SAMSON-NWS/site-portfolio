import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PhotoVideo() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="w-[85%] mx-auto text-[45px] leading-[44px] text-center text-white border-b border-[#f5f7fa] py-2 my-4">Projet Photo/Vidéo</h1>
        <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Projet Photo</h2>

        <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
          <div className="flex justify-center items-center">
            <img src="/image/P1211431-2.jpg" alt="photo" className="w-[450px]" />
          </div>
          <div className="m-12">
            <p className="w-full">
              Voici une photo que j'ai prise moi-même avec un vrai appareil photo,
              que j'ai dû calibrer en ajustant les ISO, l'ouverture du diaphragme et la vitesse d'obturation.
            </p>
            <p>Après avoir pris la photo, j'ai effectué des retouches pour accentuer l'idée que je voulais transmettre.</p>
          </div>
        </div>

        <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Projet Vidéo</h2>
        <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
          <div className="flex justify-center items-center">
            <div className="text-center mt-16 mb-16">
              <a className="btn-glow" href="https://youtu.be/F6IfuDU1xNk" target="_blank" rel="noreferrer">Ma vidéo</a>
            </div>
          </div>
          <div className="m-12">
            <p className="w-full">
              Voici l'une de mes réalisations préférées jusqu'à présent. Après avoir réalisé la photo,
              nous devions créer une vidéo en 2 jours et demi, soit seul, soit en groupe. J'ai choisi de la réaliser seul.
            </p>
            <p>Ce projet a capté toute mon attention. J'ai réussi à terminer une vidéo d'environ 2 minutes 30.</p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
          <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
            <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Merci !</h2>
            <p className="text-center">Merci d'être arrivé jusqu'ici !</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
