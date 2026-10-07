import { Link } from 'react-router-dom';
import Text from './Text';

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-evenly flex-row text-white bg-[#18191f] flex-wrap text-center py-8 gap-6 px-6">
        <div>
          <Text>Quentin SAMSON</Text>
          <Text>Graphiste - Monteurs Vidéos</Text>
          <Text>Me contacter : <a className="text-white" href="mailto:samson.quentin13@gmail.com">samson.quentin13@gmail.com</a></Text>
        </div>
        <div className="flex items-center text-white">
          <a className="text-white m-4" href="https://www.linkedin.com/in/quentin-samson-08492a335/" target="_blank" rel="noreferrer">Linkedin</a>
          <a className="text-white m-4" href="https://github.com/Quentin-SAMSON-NWS" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="flex items-center flex-col justify-center">
          <Link className="text-white" to="/mention-legales">Mentions légales</Link>
          <Text>&copy; Quentin SAMSON - Tous droits réservés - 2025</Text>
        </div>
      </div>
    </footer>
  );
}
