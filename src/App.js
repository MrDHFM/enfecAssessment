import './App.css';
import Carousel from './components/Carousel/Carousel';
import CarouselComponent from './components/Carousel/CarouselComponent';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Help from './components/Help/Help';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div >
      <Header />
      <HeroSection />
      <Carousel />
      <CarouselComponent />
      <Help />
     <Footer />
    </div>
  );
}

export default App;
