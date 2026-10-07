import afficheNw5Img from '../assets/image/AfficheNW5.jpg';
import nw5Img from '../assets/image/NW5 (1).png';
import nw5Pdf from '../assets/image/NW5 (1).pdf';
import Text from '../components/Text';

export default function Nw5() {
  return (
    <>
      <h1 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4">Normandie Web five !</h1>

      <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
        <div className="flex justify-center items-center">
          <img src={afficheNw5Img} alt="AfficheNW5" className="w-112.5" />
        </div>
        <div className="m-12">
          <h3>Le Normandie Web five ou NW5 !</h3>
          <Text className="w-full">
            Il s'agit d'un événement créé par un petit groupe de notre école dont je fais partie.
            Un tournoi de 5 contre 5 que nous devions organiser nous-mêmes.
          </Text>
          <Text>
            Notre mission comprenait l'organisation complète de l'événement avec retransmission sur Twitch.
            Nous avons contacté Red Bull, Decathlon et Le Five pour sponsoriser l'événement.
          </Text>
        </div>
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
        <div className="flex rounded-[25px] p-8 w-1/2 items-center justify-center">
          <img src={nw5Img} alt="NW5 tableau" className="w-[150%]" />
        </div>
        <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
          <Text>Nous avons créé un plan de communication pour chaque entreprise.</Text>
          <Text>Finalement, nous avons présenté l'événement devant la classe et avons été élus.</Text>
        </div>
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
        <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
          <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Merci !</h2>
          <Text className="text-center">Merci d'être arrivé jusqu'ici ! Je vous laisse le diaporama ci-dessous.</Text>
          <div className="text-center mt-16 mb-16">
            <a href={nw5Pdf} className="w-[90%] max-w-125 h-15 flex items-center justify-center text-center text-[aliceblue] border-2 border-[#ffffff22] rounded-[15px] my-[0.5em] mx-auto bg-[#0f0e0e] transition-all duration-300 ease-in-out text-base relative z-1 overflow-hidden hover:border-transparent hover:[background:linear-gradient(#0f0e0e,#0f0e0e)_padding-box,linear-gradient(145deg,#e81cff,#40c9ff)_border-box] hover:scale-[1.03] hover:animation-[pulse-glow_1.5s_infinite_ease-in-out]">Diaporama</a>
          </div>
        </div>
      </div>
    </>
  );
}
