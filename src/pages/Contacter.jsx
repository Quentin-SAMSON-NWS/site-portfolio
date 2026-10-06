import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contacter() {
  return (
    <>
      <Navbar />
      <section>
        <h2 className="w-[85%] mx-auto text-[45px] leading-[44px] text-center text-white border-b border-[#f5f7fa] py-2 my-4" id="me_contacter">Me contacter</h2>
        <div className="bg-[#0f0e0e] rounded-[15px] w-[85%] mx-auto">
          <div className="text-white p-12 mb-12">
            <h2 className="text-[45px] m-0 pb-8">Pour me contacter :</h2>
            <p>E-mail : samson.quentin13@gmail.com</p>
            <p>Téléphone : 06 49 59 94 47</p>
            <p>Linkedin : Quentin Samson</p>
            <a href="/image/CV.pdf" className="btn-glow">Mon CV</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
