import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import Event from '../Events/Events.jsx';
import Services from '../Services/Services.jsx';
import Gallery from '../Gallery/Gallery.jsx';
import Footer from '../Footer/Footer.jsx';


const Home = () => {
  return (
    <>
        <Navbar />
        <Carousel />
        <Event />
        <Services />
        <Gallery />
        <Footer />
    </>
  );
}

export default Home;
