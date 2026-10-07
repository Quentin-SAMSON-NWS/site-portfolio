import cvPdf from '../assets/image/CV.pdf';
import Text from '../components/Text';

export default function Contacter() {
  return (
    <>
      <h2 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4" id="me_contacter">Me contacter</h2>
      <div className="bg-[#0f0e0e] rounded-[15px] w-[85%] mx-auto">
        <div className="text-white p-12 mb-12">
          <h2 className="text-[45px] m-0 pb-8">Pour me contacter :</h2>
          <Text>E-mail : samson.quentin13@gmail.com</Text>
          <Text>Téléphone : 06 49 59 94 47</Text>
          <Text>Linkedin : Quentin Samson</Text>
          <a href={cvPdf} className="w-[90%] max-w-125 h-15 flex items-center justify-center text-center text-[aliceblue] border-2 border-[#ffffff22] rounded-[15px] my-[0.5em] mx-auto bg-[#0f0e0e] transition-all duration-300 ease-in-out text-base relative z-1 overflow-hidden hover:border-transparent hover:[background:linear-gradient(#0f0e0e,#0f0e0e)_padding-box,linear-gradient(145deg,#e81cff,#40c9ff)_border-box] hover:scale-[1.03] hover:[animation:pulse-glow_1.5s_infinite_ease-in-out]">Mon CV</a>
        </div>
      </div>
    </>
  );
}
