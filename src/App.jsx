import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Plx from 'react-plx';
import ServerAddress from './components/ServerAddress/ServerAddress';

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
          <ServerAddress />
        </Plx>
      </div>
      <div className='mt-auto z-20'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
