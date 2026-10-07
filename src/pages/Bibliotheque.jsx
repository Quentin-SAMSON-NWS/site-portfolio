import bibliImg from '../assets/image/bibli.PNG';
import postImg from '../assets/image/post.PNG';
import mainBibliImg from '../assets/image/main bibli.PNG';

export default function Bibliotheque() {
  return (
    <>
      <h1 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4">Projet Bibliothèque de Vidéos YouTube</h1>

      <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
        <div className="flex justify-center items-center">
          <img src={bibliImg} alt="bibli" className="w-112.5" />
        </div>
        <div className="m-12">
          <p className="w-full">
            Le projet de la bibliothèque de vidéos YouTube est une tâche que nous avons reçue de notre école.
            L'objectif est de créer un site en HTML, CSS et JavaScript, centré sur une bibliothèque de vidéos.
            Nous avons terminé la première version du site en utilisant ces technologies.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-row w-3/4 rounded-[25px] p-8 mx-auto mt-20 text-white bg-[#18191f]">
        <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Un aperçu du site</h2>
        <div className="flex flex-row">
          <img src={postImg} alt="aperçu 1" className="w-112.5" />
          <img src={mainBibliImg} alt="aperçu 2" className="w-112.5" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap w-3/4 rounded-[25px] p-8 mx-auto bg-[#18191f] text-base mt-20 mb-20">
        <div className="rounded-[25px] p-8 text-[aliceblue] w-full">
          <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Merci !</h2>
          <p className="text-center">Merci d'être arrivé jusqu'ici !</p>
        </div>
      </div>
    </>
  );
}
