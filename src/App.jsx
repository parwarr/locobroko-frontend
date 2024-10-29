import './App.css';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ServerAddress from './components/ServerAddress/ServerAddress';
import Stats from './components/Stats/Stats';
import StartPage from './components/StartPage/StartPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div id="startPage">
        <StartPage />
      </div>
      <div id="serverAddress" className="relative w-full">
        <ServerAddress />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="footer" className="mt-auto z-20">
        <Footer />
      </div>
    </div>
  );
}

export default App;
