import Nav from '../components/Nav';
import FirstNationEbikes from '../components/FirstNationEbikes';
import Footer from '../components/Footer';

export default function FirstNationPage() {
  return (
    <div className="min-h-screen bg-dna-midnight">
      <Nav />
      <div className="pt-24">
        <FirstNationEbikes />
      </div>
      <Footer />
    </div>
  );
}
