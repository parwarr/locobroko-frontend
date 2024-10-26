import './App.css';
import './index.css'
import Footer from './components/Footer/Footer';
import Plx from 'react-plx';
import ServerAddress from './components/ServerAddress/ServerAddress';
import Stats from './components/Stats/Stats';

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="relative h-[100vh] overflow-hidden border-b-4 border-gray-400">
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
          className="absolute inset-0 w-full"
        >
          <img
            className="w-full object-cover h-full blur-md"
            src="title.png"
            alt="background"
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
          className="absolute left-[50%] top-[10vw] transform -translate-x-1/2 w-full flex justify-center"
        >
          <img
            className=""
            src="/serverIcon.png"
            alt="Server Icon"
          />
        </Plx>
      </div>

      <div  className="relative w-full">
          <ServerAddress />
      </div>
      <div>
      <Stats/>
      </div>

      <div className="mt-auto z-20">
        <Footer />
      </div>
    </div>
  );
}

export default App;
