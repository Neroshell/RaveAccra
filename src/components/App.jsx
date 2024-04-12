import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Carousel from './Carousel/Carousel.jsx';
import Services from './Services/Services.jsx';
import Events from './Events/Events.jsx';
import Gallery from './Gallery/Gallery.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Events />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
