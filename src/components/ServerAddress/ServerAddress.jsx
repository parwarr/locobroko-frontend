import { FaDiscord, FaArrowRight } from 'react-icons/fa'; // Add icons for Discord and arrow
import Trailer from '../Trailer/Trailer';

function ServerAddress() {
  return (
    <div className='min-h-screen'>
      <div className='pl-40 pt-14'>
        <div className='flex flex-col p-10 text-left max-w-96 rounded-3xl bg-opacity-70 bg-slate-700 shadow-lg'>
          <span className='bowlby-one-sc-regular text-6xl m-auto text-white'>
            LocoBroko
          </span>
          <span className='text-wrap text-gray-400 my-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            odio ad facilis quasi cumque.
          </span>
          <span className='bg-gradient-to-r from-blue-300 via-teal-500 bg-clip-text text-base font-extrabold text-transparent select-auto'>
            SERVERADRESSE
          </span>
          <div className='flex flex-row mt-4'>
            <div className='border border-transparent shadow-md shadow-[#6495ed] rounded-md w-52 p-2 bg-gradient-to-r from-blue-300 via-teal-500 bg-clip-text text-base font-extrabold text-transparent select-auto'>
              LocoBroko.net
            </div>
            <button
              onClick={() => navigator.clipboard.writeText('LocoBroko.net')}
              className='border-transparent shadow-md shadow-[#6495ed] ease-in duration-300 rounded-md p-2 bg-[#6495ed] text-white hover:scale-110 hover:ring-4 hover:ring-[#6495ed] hover:ring-opacity-50 ml-[-10px]'
            >
              Kopieren
            </button>
          </div>
        </div>
        <div className='w-[90%] absolute right-[-20.75rem] transform -translate-y-1/2 p-4'>
          <Trailer />
        </div>
        <div className='flex justify-center space-x-40'>
          <a
            href='#'
            className='flex items-center bg-slate-700 bg-opacity-80 text-white text-xl py-2 px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-slate-600 hover:border-t-white transition-transform'
          >
            <FaDiscord className='mr-3' /> Discord
            <FaArrowRight className='ml-2' />
          </a>

          <a
            href='#'
            className='flex items-center bg-slate-700 bg-opacity-80 text-white text-xl py-2 px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-slate-600 transition-transform'
          >
            <FaDiscord className='mr-3' /> Discord
            <FaArrowRight className='ml-2' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServerAddress;
