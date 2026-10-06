import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ClubEco() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="w-[85%] mx-auto text-[45px] leading-[44px] text-center text-white border-b border-[#f5f7fa] py-2 my-4">Club eco saint sever !</h1>

        <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
          <div className="flex justify-center items-center">
            <img src="/image/banniere linkedin.png" alt="banniere" className="w-[450px]" />
          </div>
          <div className="m-12">
            <h3>Clube Eco Saint Sever</h3>
            <p className="w-full">
              Il s'agit d'une association qui a contacté la Normandie Web School afin que nous refassions
              la charte graphique de l'association Club Eco Saint-Sever, qui regroupe plus de 40 entreprises.
            </p>
            <p>Dans ce projet en groupe, un vainqueur a été désigné pour présenter sa charte graphique.</p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
          <div className="flex rounded-[25px] p-8 w-1/2 items-center justify-center">
            <img src="/image/Free_Tote_Bag_Mockup_3 1.png" alt="tote bag" className="h-[450px]" />
          </div>
          <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
            <p>Nous avons refait leur logo, créé des bannières pour leurs réseaux sociaux, et réalisé des mock-ups.</p>
            <p>Nous avons présenté notre travail devant toute la classe et avons été élus.</p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
          <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
            <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Merci !</h2>
            <p className="text-center">Merci d'être allé jusqu'ici !</p>
            <div className="text-center mt-16 mb-16">
              <a href="/image/Charte.pdf" className="btn-glow">Diaporama</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
