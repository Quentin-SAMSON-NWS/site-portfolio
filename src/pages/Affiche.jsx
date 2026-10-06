import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Affiche() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="w-[85%] mx-auto text-[45px] leading-[44px] text-center text-white border-b border-[#f5f7fa] py-2 my-4">Affiches/Flyers</h1>
        <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Bienvenue dans mes créations d'affiches et de flyers !</h2>
        <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Affiches professionnelles</h2>

        <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
          <div className="flex justify-center items-center">
            <img src="/image/AfficheNW5.jpg" alt="AfficheNW5" className="w-[450px]" />
          </div>
          <div className="m-12">
            <p className="w-full">
              Cette affiche a été créée pour un projet du BDE, qui consistait à organiser
              un tournoi de 5 contre 5 inter-classes au sein de notre école.
            </p>
          </div>
        </div>

        <h2 className="w-[85%] mx-auto text-[35px] leading-[44px] text-center text-[#f5f7fa] py-2 my-4">Affiches personnelles</h2>
        <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
          <div className="flex justify-center items-center">
            <img src="/image/affiche nissan gtr r35 petit.png" alt="nissan gtr" className="w-[450px]" />
          </div>
          <div className="m-12">
            <p className="w-full">
              Voici ma première affiche ! Elle représente l'une de mes voitures préférées
              avec Godzilla en arrière-plan. Pourquoi ? Parce que cette voiture est surnommée
              "Godzilla" en raison de sa puissance et de son poids.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/image/r35.png" alt="r35-v2" className="w-[700px]" />
          </div>
          <div className="m-12">
            <p className="w-full">
              Cette deuxième version de la R35 apporte davantage de complexité à la composition.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
