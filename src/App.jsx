import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Footer from './components/Footer/Footer';
import Plx from 'react-plx';
import ServerAddress from './components/ServerAddress/ServerAddress';
import Stats from './components/Stats/Stats';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[100vh] overflow-hidden border-b-4 border-gray-400">
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
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
              <picture>
                <source media="(min-width: 1024px)" srcSet="/images/title.png" />
                <source media="(min-width: 640px)" srcSet="/images/title.png" />
                <img
                  className="w-full object-cover h-full blur-md"
                  src="/images/title.png"
                  alt="background"
                  loading="lazy"
                />
              </picture>
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
                <picture className="block w-full h-auto">
                  <source media="(min-width: 1024px)" srcSet="/images/serverIcon.png" />
                  <source media="(min-width: 640px)" srcSet="/images/serverIcon.png" />
                  <img
                    className="w-full h-auto"
                    src="/images/serverIcon.png"
                    alt="Server Icon"
                    loading="lazy"
                  />
                </picture>
              </div>
            </Plx>
          </>
        )}
      </div>
      <div className="relative w-full">
        {!isLoading && <ServerAddress />}
      </div>
      <div>
        {!isLoading && <Stats />}
      </div>
      <div className="mt-auto z-20">
        {!isLoading && <Footer />}
      </div>
    </div>
  );
}

export default App;
