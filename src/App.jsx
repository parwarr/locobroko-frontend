import './App.css';
import './index.css';
import Footer from './components/Footer/Footer';
import ServerAddress from './components/ServerAddress/ServerAddress';
import Stats from './components/Stats/Stats';
import Plx from 'react-plx';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
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
                className="w-full h-auto"
                src="/images/serverIcon.png"
                alt="Server Icon"
                loading="lazy"
              />
          </div>
        </Plx>
        </div>
        


      <div className="relative w-full">
        { <ServerAddress />}
      </div>
      <div>
        { <Stats />}
      </div>
      <div className="mt-auto z-20">
        { <Footer />}
      </div>
    </div>
  );
}

export default App;
