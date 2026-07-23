import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import PhotoStrip from './components/PhotoStrip';
import TheJourney from './components/TheJourney';
import Tracks from './components/Tracks';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import FirstNationPage from './pages/FirstNation';

function WorkingDraftBanner() {
  return (
    <div className="w-full bg-jamaica-black text-jamaica-yellow text-center text-xs font-mono tracking-widest uppercase py-2 px-4">
      ⚠ Working Draft — This site is in development. To{' '}
      <a
        href="https://mindwaveja.com/marketplace/artist-digital-territory-license"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white transition-colors"
      >
        purchase
      </a>
      {' '}this artist site.
    </div>
  );
}

function MainPage() {
  return (
    <div className="min-h-screen">
      
      <WorkingDraftBanner />
      <Nav />
      <Hero />
      <PhotoStrip />
      <TheJourney />
      <Tracks />
      
      <Footer />
    </div>
  );
}



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/1st-nation" element={<FirstNationPage />} />
    </Routes>
  );
}
