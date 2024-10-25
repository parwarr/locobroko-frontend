import { FaDiscord, FaArrowRight, FaCopy, FaYoutube } from 'react-icons/fa'; 
import Trailer from '../Trailer/Trailer';
import './ServerAddress.css'


function ServerAddress() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className='flex flex-row justify-between gap-10'>
<div className="flex flex-col p-6 md:p-10 text-left max-w-full md:max-w-lg rounded-3xl bg-opacity-70 bg-slate-700 shadow-lg mx-auto border-gray-400 border-4 pr-9">
  <span className="text-4xl md:text-6xl text-center text-white">
    LocoBroko
  </span>

  <span className="text-gray-300 my-4 md:my-6 text-sm md:text-base text-left">
  <ol className="list-inside space-y-4">
    <li className="flex items-center gap-2 ">
      <span className="rounded-full bg-blue-500 text-white w-6 h-6 flex items-center justify-center">1</span>
      Starte Minecraft und klicke auf „Mehrspieler“
    </li>
    <li className="flex items-center gap-2">
      <span className="rounded-full bg-blue-500 text-white w-6 h-6 flex items-center justify-center">2</span>
      Klicke auf „Server hinzufügen“
    </li>
    <li className="flex items-center gap-2">
      <span className="rounded-full bg-blue-500 text-white w-6 h-6 flex items-center justify-center">3</span>
      Gib die Serveradresse „LocoBroko.net“ ein
    </li>
    <li className="flex items-center gap-2">
      <span className="rounded-full bg-blue-500 text-white w-6 h-6 flex items-center justify-center">4</span>
      Klicke auf „Fertig“ und verbinde dich!
    </li>
  </ol>
</span>


  <span className="text-gray-100 text-sm md:text-base font-extrabold text-center">
    SERVERADRESSE
  </span>
  <div className="flex justify-center mt-4  transition ease-in-out duration-1000 delay-250 hover:scale-110">
    <div
      onClick={() => navigator.clipboard.writeText('LocoBroko.net')}
      className="relative flex items-center justify-between border border-gray-400 rounded-md w-full md:w-52 p-2 text-sm md:text-base font-bold text-gray-200 bg-gray-600 cursor-pointer transition-all duration-300 hover:bg-gray-700 hover-neon"
    >
      <span className="text-center">LocoBroko.net</span>
      <FaCopy className="text-white ml-2" />
    </div>
  </div>
</div>
<div className="flex flex-col p-6 md:p-10 text-left max-w-full md:max-w-lg rounded-3xl bg-opacity-70 bg-slate-700 shadow-lg mx-auto border-gray-400 border-4 pr-9">
  <span className="text-4xl md:text-6xl text-center text-white">
    Join Our Community
  </span>

  <span className="text-gray-300 my-4 md:my-6 text-sm md:text-base text-center">
  Sei ein Teil der wachsenden LocoBroko-Community! Entdecke epische Builds, nimm an spannenden Events teil und triff Spieler aus der ganzen Welt.
  </span>

  <span className="text-gray-100 text-sm md:text-base font-extrabold text-center">
    Don't miss out – join now!
  </span>

  <div className="flex justify-center mt-4 transition ease-in-out duration-1000 delay-250 hover:scale-110">

              <a
            href="https://discord.gg/fEEygAszUp"
            className="flex items-center justify-center bg-slate-700 bg-opacity-80 text-white text-lg md:text-xl py-2 px-4 md:px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-slate-600 transition-transform border-gray-400 border-4"
          >
            <FaDiscord className="mr-2" /> Discord
          </a>
  </div>
</div>
</div>


      <div className="flex flex-col items-center mt-8 md:mt-10 w-full pt-20">
        <div className="w-[90%] md:w-[70%] mb-6">
          <Trailer />
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-40">
          {/* <a
            href="https://www.youtube.com/channel/UCXTBHWIiYGXib9RZ5AwdHwA"
            className="flex items-center justify-center bg-red-700 bg-opacity-80 text-white text-lg md:text-xl py-2 px-4 md:px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-red-600 transition-transform border-gray-400 border-4"
          >
            <FaYoutube className="mr-2" /> Hamedloco
          </a> */}

          <a
            href="https://www.youtube.com/channel/UCXTBHWIiYGXib9RZ5AwdHwA"
            className="flex items-center justify-center bg-red-700 bg-opacity-80 text-white text-lg md:text-xl py-2 px-4 md:px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-red-600 transition-transform border-gray-400 border-4"
          >
            <FaYoutube className="mr-2" /> LocoBroko
          </a>
          
          {/* <a
            href="https://www.youtube.com/channel/UCXTBHWIiYGXib9RZ5AwdHwA"
            className="flex items-center justify-center bg-red-700 bg-opacity-80 text-white text-lg md:text-xl py-2 px-4 md:px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-red-600 transition-transform border-gray-400 border-4"
          >
            <FaYoutube className="mr-2" /> Berkoli
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ServerAddress;
