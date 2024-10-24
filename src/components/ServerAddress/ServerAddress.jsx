import { FaDiscord, FaArrowRight, FaCopy, FaYoutube } from 'react-icons/fa'; 
import Trailer from '../Trailer/Trailer';

function ServerAddress() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
<div className="flex flex-col p-6 md:p-10 text-left max-w-full md:max-w-lg rounded-3xl bg-opacity-70 bg-slate-700 shadow-lg mx-auto">
  <span className="bowlby-one-sc-regular text-4xl md:text-6xl text-center text-white">
    LocoBroko
  </span>

  <span className="text-gray-300 my-4 md:my-6 text-sm md:text-base text-center">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
    odio ad facilis quasi cumque.
  </span>

  <span className="text-gray-100 text-sm md:text-base font-extrabold text-center">
    SERVERADRESSE
  </span>

  <div className="flex justify-center mt-4">
    <div
      onClick={() => navigator.clipboard.writeText('LocoBroko.net')}
      className="flex items-center justify-between border border-gray-400 shadow-md rounded-md w-full md:w-52 p-2 text-sm md:text-base font-bold text-gray-200 bg-gray-800 cursor-pointer hover:bg-gray-700 transition-colors"
    >
      <span className="text-center">LocoBroko.net</span>
      <FaCopy className="text-white ml-2" />
    </div>
  </div>
</div>
      <div className="flex flex-col items-center mt-8 md:mt-10 w-full">
        <div className="w-[90%] md:w-[70%] mb-6">
          <Trailer />
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-40">
          <a
            href="https://discord.gg/fEEygAszUp"
            className="flex items-center justify-center bg-slate-700 bg-opacity-80 text-white text-lg md:text-xl py-2 px-4 md:px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-slate-600 transition-transform"
          >
            <FaDiscord className="mr-2" /> Discord
            <FaArrowRight className="ml-2" />
          </a>
          
          <a
            href="https://www.youtube.com/channel/UCXTBHWIiYGXib9RZ5AwdHwA"
            className="flex items-center justify-center bg-red-700 bg-opacity-80 text-white text-lg md:text-xl py-2 px-4 md:px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-red-600 transition-transform"
          >
            <FaYoutube className="mr-2" /> Youtube
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServerAddress;
