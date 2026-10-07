import handisupImg from '../assets/image/handisup.png';
import avantImg from '../assets/image/Avant.PNG';
import avant2Img from '../assets/image/avant2.PNG';
import newHandisupImg from '../assets/image/Newhandisup.PNG';
import Text from '../components/Text';

export default function Handisup() {
  return (
    <>
      <h1 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4">Handisup</h1>

      <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
        <div className="flex justify-center items-center">
          <img src={handisupImg} alt="handisup" className="w-112.5" />
        </div>
        <div className="m-12">
          <Text className="w-full">
            Handisup est une association qui soutient les jeunes étudiants en situation de handicap
            dans leur intégration au lycée, dans l'enseignement supérieur et dans le monde du travail.
          </Text>
          <Text>
            Avec mon groupe, nous avons effectué cette refonte en utilisant WordPress.
            Nous avons eu une semaine pour la veille numérique et une semaine pour la création du site.
          </Text>
        </div>
      </div>

      <div className="flex items-center justify-center flex-row w-3/4 rounded-[25px] p-8 mx-auto mt-20 text-white bg-[#18191f]">
        <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Avant :</h2>
        <div className="flex flex-row">
          <img src={avantImg} alt="avant" className="w-112.5" />
          <img src={avant2Img} alt="avant 2" className="w-112.5" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-row w-3/4 rounded-[25px] p-8 mx-auto mt-20 text-white bg-[#18191f]">
        <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Après :</h2>
        <div className="flex flex-row">
          <img src={handisupImg} alt="après" className="w-112.5" />
          <img src={newHandisupImg} alt="après 2" className="w-112.5" />
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
