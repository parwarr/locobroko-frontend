import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Plx from 'react-plx';
import ServerAddress from './components/ServerAddress/ServerAddress';
import Stats from './components/Stats/Stats';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}

      <div className="relative h-[100vh] overflow-hidden">
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
            className="w-full object-cover h-full"
            src="serverlobby.png"
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
            className="w-[30vw] max-w-[300px] min-w-[150px]"
            src="/serverIcon.png"
            alt="Server Icon"
          />
        </Plx>
      </div>

      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
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
                  property: 'scale',
                },
              ],
            },
          ]}
          className="relative w-full"
        >
          <ServerAddress />
        </Plx>
      </div>
      <div>
      <Stats/>
      </div>

      {/* Footer */}
      <div className="mt-auto z-20">
        <Footer />
      </div>
    </div>
  );
}

export default App;
