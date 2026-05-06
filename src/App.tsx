import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import PhotoStrip from './components/PhotoStrip';
import TheJourney from './components/TheJourney';
import Tracks from './components/Tracks';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import FirstNationPage from './pages/FirstNation';
import WorkingDraftBanner from './components/WorkingDraftBanner';

function MainPage() {
  return (
    <div className="min-h-screen pb-10">
      <Nav />
      <Hero />
      <PhotoStrip />
      <TheJourney />
      <Tracks />
      <Footer />
      <WorkingDraftBanner artist="Jahshii" />
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
