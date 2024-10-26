import './App.css';
import './index.css';
import React, { Suspense } from 'react';
import Plx from 'react-plx';

const Footer = React.lazy(() => import('./components/Footer/Footer'));
const ServerAddress = React.lazy(() => import('./components/ServerAddress/ServerAddress'));
const Stats = React.lazy(() => import('./components/Stats/Stats'));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[100vh] overflow-hidden border-b-4 border-gray-400">
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 100,
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
            <source
              media="(min-width: 1024px)"
              srcSet="/images/title.png"
            />
            <source
              media="(min-width: 640px)"
              srcSet="/images/title.png"
            />
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
      end: 200,
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
      <source
        media="(min-width: 1024px)"
        srcSet="/images/serverIcon.png"
      />
      <source
        media="(min-width: 640px)"
        srcSet="/images/serverIcon.png"
      />
      <img
        className="w-full h-auto"
        src="/images/serverIcon.png"
        alt="Server Icon"
        loading="lazy"
      />
    </picture>
  </div>
</Plx>

      </div>

      <div className="relative w-full px-4 sm:px-8 lg:px-16">
        <Suspense fallback={<div>Loading...</div>}>
          <ServerAddress />
        </Suspense>
      </div>

      <div className="relative w-full px-4 sm:px-8 lg:px-16">
        <Suspense fallback={<div>Loading...</div>}>
          <Stats />
        </Suspense>
      </div>

      <div className="mt-auto z-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
