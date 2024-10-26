import { FaDiscord, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 mt-10 border-t-4 border-gray-400">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img src="/images/serverIcon.png" alt="Logo" loading="lazy"  className="w-32 mb-4" /> 
        </div>

        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">BRAUCHST DU HILFE?</h3>
          <p className="text-sm">
            Für Fragen, Informationen und Hilfe steht dir das LocoBroko Support-Team zur Verfügung.
          </p>
          <p className="text-sm mt-2">
            Viele Fragen haben wir bereits in unseren <a href="https://discord.gg/fEEygAszUp" className="text-red-500">Discord</a> beantwortet – schau doch mal vorbei!
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">FOLGE UNS</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://discord.gg/fEEygAszUp" className="flex items-center">
                <FaDiscord className="mr-2" /> 
                <span>Discord</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCXTBHWIiYGXib9RZ5AwdHwA" className="flex items-center">
                <FaYoutube className="mr-2" /> 
                <span>Youtube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
