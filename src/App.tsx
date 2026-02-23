import TopBar from './sections/TopBar';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Notices from './sections/Notices';
import Services from './sections/Services';
import Statistics from './sections/Statistics';
import Gallery from './sections/Gallery';
import Downloads from './sections/Downloads';
import Network from './sections/Network';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header with Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Notices & Highlights */}
        <Notices />
        
        {/* Services Grid */}
        <Services />
        
        {/* Statistics Counter */}
        <Statistics />
        
        {/* Image Gallery */}
        <Gallery />
        
        {/* Downloads & Resources */}
        <Downloads />
        
        {/* Immigration Network */}
        <Network />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
