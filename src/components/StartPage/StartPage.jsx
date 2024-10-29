import Plx from 'react-plx';
import { FaArrowDown } from 'react-icons/fa';

function StartPage() {
  return (
   
    <div
    className="relative flex items-center justify-center h-[100vh] overflow-hidden border-b-4 border-slate-50"
  >
    <Plx
    parallaxData={[
      {
        start: 0,
        end: 400,
        properties: [
          {
            startValue: 1,
            endValue: 1.18,
            property: 'scale',
          },
        ],
      },
    ]}
    className="absolute inset-0 w-full"
  >
      <img
        className="w-full object-cover h-full blur-sm"
        src="/images/title-medium.png"
        alt="background"
        loading="lazy"
      />
  </Plx>

  <Plx
    parallaxData={[
      {
        start: 0,
        end: 400,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: 'opacity',
          },
        ],
      },
    ]}
    className="flex items-center justify-center w-full h-full"
  >
    <div className="w-auto max-w-[500px] m-auto">
  
        <img
          className="w-full h-auto flex justify-center"
          src="/images/serverIcon.png"
          alt="Server Icon"
          loading="lazy"
        />
        <span className='flex justify-center text-5xl ml-6'>
          <a
        href="#serverAddress"
       >
       <img src="/images/arrow.png" alt="logo" className="h-10 sm:h-12 md:h-14 rotate-90 animate-arrow" />
       </a>
        </span>
    </div>
    <div>
  
    </div>
  </Plx>
  </div>
  )
}

export default StartPage