import photoImg from '../assets/image/P1211431-2.jpg';
import Text from '../components/Text';

export default function PhotoVideo() {
  return (
    <>
      <h1 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4">Projet Photo/Vidéo</h1>
      <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Projet Photo</h2>

      <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
        <div className="flex justify-center items-center">
          <img src={photoImg} alt="photo" className="w-112.5" />
        </div>
        <div className="m-12">
          <Text className="w-full">
            Voici une photo que j'ai prise moi-même avec un vrai appareil photo,
            que j'ai dû calibrer en ajustant les ISO, l'ouverture du diaphragme et la vitesse d'obturation.
          </Text>
          <Text>Après avoir pris la photo, j'ai effectué des retouches pour accentuer l'idée que je voulais transmettre.</Text>
        </div>
      </div>

      <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Projet Vidéo</h2>
      <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
        <div className="flex justify-center items-center">
          <div className="text-center mt-16 mb-16">
            <a className="w-[90%] max-w-125 h-15 flex items-center justify-center text-center text-[aliceblue] border-2 border-[#ffffff22] rounded-[15px] my-[0.5em] mx-auto bg-[#0f0e0e] transition-all duration-300 ease-in-out text-base relative z-1 overflow-hidden hover:border-transparent hover:[background:linear-gradient(#0f0e0e,#0f0e0e)_padding-box,linear-gradient(145deg,#e81cff,#40c9ff)_border-box] hover:scale-[1.03] hover:animation-[pulse-glow_1.5s_infinite_ease-in-out]" href="https://youtu.be/F6IfuDU1xNk" target="_blank" rel="noreferrer">Ma vidéo</a>
          </div>
        </div>
        <div className="m-12">
          <Text className="w-full">
            Voici l'une de mes réalisations préférées jusqu'à présent. Après avoir réalisé la photo,
            nous devions créer une vidéo en 2 jours et demi, soit seul, soit en groupe. J'ai choisi de la réaliser seul.
          </Text>
          <Text>Ce projet a capté toute mon attention. J'ai réussi à terminer une vidéo d'environ 2 minutes 30.</Text>
        </div>
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
        <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
          <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Merci !</h2>
          <Text className="text-center">Merci d'être arrivé jusqu'ici !</Text>
        </div>
      </div>
    </>
  );
}
