import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Nw5() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="w-[85%] mx-auto text-[45px] leading-[44px] text-center text-white border-b border-[#f5f7fa] py-2 my-4">Normandie Web five !</h1>

        <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
          <div className="flex justify-center items-center">
            <img src="/image/AfficheNW5.jpg" alt="AfficheNW5" className="w-[450px]" />
          </div>
          <div className="m-12">
            <h3>Le Normandie Web five ou NW5 !</h3>
            <p className="w-full">
              Il s'agit d'un événement créé par un petit groupe de notre école dont je fais partie.
              Un tournoi de 5 contre 5 que nous devions organiser nous-mêmes.
            </p>
            <p>
              Notre mission comprenait l'organisation complète de l'événement avec retransmission sur Twitch.
              Nous avons contacté Red Bull, Decathlon et Le Five pour sponsoriser l'événement.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
          <div className="flex rounded-[25px] p-8 w-1/2 items-center justify-center">
            <img src="/image/NW5 (1).png" alt="NW5 tableau" className="w-[150%]" />
          </div>
          <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
            <p>Nous avons créé un plan de communication pour chaque entreprise.</p>
            <p>Finalement, nous avons présenté l'événement devant la classe et avons été élus.</p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
          <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
            <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Merci !</h2>
            <p className="text-center">Merci d'être arrivé jusqu'ici ! Je vous laisse le diaporama ci-dessous.</p>
            <div className="text-center mt-16 mb-16">
              <a href="/image/NW5 (1).pdf" className="btn-glow">Diaporama</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
