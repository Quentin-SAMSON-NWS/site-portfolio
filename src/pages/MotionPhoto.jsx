import teaserVideo from '../assets/vidéo/teaser - Trim.mp4';
import renderVideo from '../assets/vidéo/render_2.mp4';
import Text from '../components/Text';

const photoGlob = import.meta.glob('../assets/image/photo *.JPG', { eager: true, import: 'default' });
const getPhotoUrl = (n) => photoGlob[`../assets/image/photo (${n}).JPG`];

const photos = [11,21,22,10,19,23,24,29,13,16,17,18,20,1,2,3,4,5,6,7];
const paysages = [14,15];

export default function MotionPhoto() {
  return (
    <>
      <h1 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4">Motion Design/Photos</h1>
      <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Motions Design</h2>

      <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
        <div className="m-12">
          <Text className="w-full">Bienvenue sur cette page, où je partage mes différents projets en motion design et en photographie.</Text>
          <Text>Je commence avec le motion design, un domaine que j'apprends à maîtriser et qui me passionne de plus en plus.</Text>
          <Text>La photo vient compléter tout ça. Elle m'aide à travailler mon regard, mes compositions et l'esthétique de mes projets.</Text>
          <Text>Le premier motion design est mon premier essai : un effet de lame à travers un nuage de fumée révélant le mot Kensei.</Text>
          <Text>Le deuxième est un motion design fait avec un tuto youtube pour apprendre les transitions et la caméra 3D.</Text>
        </div>
        <div className="w-auto flex justify-center flex-col">
          <video className="w-175 max-[1000px]:w-112.5 max-[728px]:w-75" src={teaserVideo} controls autoPlay loop>
            <source type="video/mp4" />
          </video>
          <video className="w-175 max-[1000px]:w-112.5 max-[728px]:w-75" src={renderVideo} controls autoPlay loop>
            <source type="video/mp4" />
          </video>
        </div>
      </div>

      <h2 className="w-[85%] mx-auto text-[35px] leading-11 text-center text-[#f5f7fa] py-2 my-4">Photos</h2>
      <div className="flex items-center justify-center flex-col flex-wrap w-3/4 rounded-[25px] p-8 mx-auto text-white bg-[#18191f] mb-16">
        <div className="m-12">
          <Text className="w-full">On arrive ici sur les photos que j'ai pu réaliser de mon côté personnel.</Text>
        </div>
        <div>
          <div className="grid grid-cols-5 grid-rows-5">
            <div className="[grid-area:1/1/6/6]">
              {photos.map((n) => (
                <img key={n} className="w-[16%]" src={getPhotoUrl(n)} alt="" />
              ))}
              {paysages.map((n) => (
                <img key={n} className="w-[29%]" src={getPhotoUrl(n)} alt="" />
              ))}
            </div>
          </div>
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
