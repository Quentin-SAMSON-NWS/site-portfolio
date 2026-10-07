import afficheNw5Img from '../assets/image/AfficheNW5.jpg';
import afficheNissanImg from '../assets/image/affiche nissan gtr r35 petit.png';
import r35Img from '../assets/image/r35.png';

export default function Affiche() {
  return (
    <>
      <h1 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4">Affiches/Flyers</h1>
      <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Bienvenue dans mes créations d'affiches et de flyers !</h2>
      <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Affiches professionnelles</h2>

      <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
        <div className="flex justify-center items-center">
          <img src={afficheNw5Img} alt="AfficheNW5" className="w-112.5" />
        </div>
        <div className="m-12">
          <p className="w-full">
            Cette affiche a été créée pour un projet du BDE, qui consistait à organiser
            un tournoi de 5 contre 5 inter-classes au sein de notre école.
          </p>
        </div>
      </div>

      <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Affiches personnelles</h2>
      <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
        <div className="flex justify-center items-center">
          <img src={afficheNissanImg} alt="nissan gtr" className="w-112.5" />
        </div>
        <div className="m-12">
          <p className="w-full">
            Voici ma première affiche ! Elle représente l'une de mes voitures préférées
            avec Godzilla en arrière-plan. Pourquoi ? Parce que cette voiture est surnommée
            "Godzilla" en raison de sa puissance et de son poids.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={r35Img} alt="r35-v2" className="w-175" />
        </div>
        <div className="m-12">
          <p className="w-full">
            Cette deuxième version de la R35 apporte davantage de complexité à la composition.
          </p>
        </div>
      </div>
    </>
  );
}
