import { FaDiscord, FaArrowRight, FaCopy, FaYoutube } from 'react-icons/fa'; 
import Trailer from '../Trailer/Trailer';
import './ServerAddress.css';

function ServerAddress() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col p-4 sm:p-6 md:p-10 lg:p-16">
      <div className="flex flex-col md:flex-row justify-between gap-6 p-4 rounded-3xl shadow-xl bg-gray-900 bg-opacity-70 border-4 border-slate-50 max-w-full md:max-w-5xl">
        <div className="flex flex-col p-6 sm:p-8 md:p-10 text-left max-w-full md:max-w-lg rounded-3xl">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white font-bold">
            LocoBroko
          </span>

          <div className="my-4 md:my-6 text-sm md:text-base lg:text-lg text-left leading-relaxed">
            <ol className="list-inside space-y-4">
              {['Starte Minecraft und klicke auf „Mehrspieler“', 'Klicke auf „Server hinzufügen“', 'Gib die Serveradresse „LocoBroko.net“ ein', 'Klicke auf „Fertig“ und verbinde dich!'].map((step, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex items-center justify-center bg-blue-600 text-white w-8 h-8 rounded-full font-semibold">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <span className="text-gray-100 text-sm md:text-base font-extrabold text-center mt-4">
            SERVERADRESSE
          </span>
          <div className="flex justify-center mt-4">
            <div
              onClick={() => navigator.clipboard.writeText('LocoBroko.net')}
              className="flex items-center justify-between rounded-md w-full sm:w-64 p-2 text-sm md:text-base font-semibold text-gray-100 bg-transparent border-2 border-slate-50 cursor-pointer transition-all duration-300 hover:bg-gray-600 transform  hover:scale-105"
            >
              <span className="text-center">LocoBroko.net</span>
              <FaCopy className="text-white ml-2" />
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8 md:p-10 text-left max-w-full md:max-w-lg rounded-3xl bg-opacity-50 bg-green-700 shadow-2xl border-4 border-slate-50">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white font-bold">
            Join Our Community
          </span>

          <span className="my-4 md:my-6 text-sm md:text-base lg:text-lg text-center leading-relaxed">
            Sei ein Teil der wachsenden LocoBroko-Community! Entdecke epische Builds, nimm an spannenden Events teil und triff Spieler aus der ganzen Welt.
          </span>

          <span className="text-gray-100 text-sm md:text-base font-extrabold text-center">
            Don't miss out – join now!
          </span>

          <div className="flex justify-center mt-4">
            <a
              href="https://discord.gg/fEEygAszUp"
              className="flex items-center justify-center bg-transparent text-white text-lg md:text-xl py-2 px-4 md:px-6 rounded-lg shadow-xl hover:bg-gray-600 transition-all border-2 border-slate-50 transform duration-300 hover:scale-105"
            >
              <FaDiscord className="mr-2" /> Discord
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 md:mt-10 w-full pt-10 sm:pt-12">
        <div className="w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] mb-6">
          <Trailer />
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-16 xl:space-x-20">
          <a
            href="https://www.youtube.com/channel/UCXTBHWIiYGXib9RZ5AwdHwA"
            className="flex items-center justify-center bg-red-700 bg-opacity-80 text-white text-lg md:text-xl py-2 px-4 md:px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-red-600 transition-transform border-slate-50 border-4"
          >
            <FaYoutube className="mr-2" /> LocoBroko
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServerAddress;
