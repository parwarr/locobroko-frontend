import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Plx from 'react-plx';
import Trailer from './components/Trailer/Trailer';

function App() {
  return (
    <div>
      <Header />

      <div
        style={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 800,
              properties: [
                {
                  startValue: 1,
                  endValue: 1.18,
                  property: 'scale',
                },
              ],
            },
          ]}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
          }}
        >
          <img
            style={{ width: '100%' }}
            src='serverlobby.png'
            alt='background'
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
          style={{
            position: 'absolute',
            left: '35vw',
            top: '9vw',
            width: '100%',
          }}
        >
          <img
            style={{
              width: '30vw',
            }}
            src='/serverIcon.png'
            alt='Goonies'
          />
        </Plx>
      </div>

      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: '100% 60%',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '100px',
        }}
      >
        <Plx
          parallaxData={[
            {
              start: 400,
              end: 800,
              properties: [
                {
                  startValue: 1,
                  endValue: 1.18,
                  property: '',
                },
              ],
            },
          ]}
          style={{
            position: 'relative',
            width: '100%',
          }}
        >
          <div className='min-h-screen'>
            <div className='pl-40 pt-14'>
              <div className='flex flex-col p-10 text-left max-w-96 rounded-3xl bg-opacity-70 bg-slate-700 shadow-lg'>
                <span className='bowlby-one-sc-regular text-6xl m-auto text-white'>
                  LocoBroko test commit
                </span>
                <span className='text-wrap text-gray-400 my-6'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate odio ad facilis quasi cumque.
                </span>
                <span className='bg-gradient-to-r from-blue-300 via-teal-500 bg-clip-text text-base font-extrabold text-transparent select-auto'>
                  SERVERADRESSE
                </span>
                <div className='flex flex-row mt-4'>
                  <div className='border border-transparent shadow-md shadow-[#6495ed] rounded-md w-52 p-2 bg-gradient-to-r from-blue-300 via-teal-500 bg-clip-text text-base font-extrabold text-transparent select-auto'>
                    LocoBroko.net
                  </div>
                  <button className='border-transparent shadow-md shadow-[#6495ed] ease-in duration-300 rounded-md p-2 bg-[#6495ed] text-white hover:scale-110 hover:ring-4 hover:ring-[#6495ed] hover:ring-opacity-50 ml-[-10px]'>
                    Kopieren
                  </button>
                </div>
              </div>
            </div>
            <div className='Trailer w-[90%] absolute right-[-20.75rem] transform -translate-y-1/2 p-4'>
              <Trailer />
            </div>
          </div>
        </Plx>
      </div>
      <div className='mt-auto z-20'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
