import Text from '../components/Text';

export default function MentionLegales() {
  return (
    <>
      <h1 className="w-[85%] mx-auto text-[45px] leading-11 text-center text-white border-b border-[#f5f7fa] py-2 my-4">Mentions Légales</h1>
      <section className="w-[85%] rounded-[26px] mx-auto bg-[#131010] px-14 py-12 mt-10 mb-12 text-white">
        <h2>1. Éditeur du Site</h2>
        <ul>
          <li>Nom du site : Portfolio de Quentin SAMSON</li>
          <li>Propriétaire : Quentin SAMSON</li>
          <li>E-mail : samson.quentin13@gmail.com</li>
          <li>Étudiant en 1ère année à la normandie Web School</li>
          <li>Téléphone : 06 49 59 94 47</li>
        </ul>
        <h2>2. Propriété Intellectuelle</h2>
        <Text>L'ensemble des contenus présents sur ce site est protégé par les lois en vigueur. Toute reproduction, représentation, modification est interdite sauf autorisation écrite préalable.</Text>
        <h2>3. Responsabilité</h2>
        <Text>L'éditeur du site s'efforce de fournir des informations aussi précises que possible.</Text>
        <h2>4. Protection des Données Personnelles</h2>
        <Text>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression. Contactez : samson.quentin13@gmail.com</Text>
        <h2>5. Cookies</h2>
        <Text>Le site peut utiliser des cookies pour améliorer l'expérience utilisateur.</Text>
        <h2>6. Droit Applicable</h2>
        <Text>Les présentes mentions légales sont régies par le droit français.</Text>
      </section>
    </>
  );
}
