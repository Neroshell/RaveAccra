import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from './Navbar/Navbar.jsx';
import Carousel from './Carousel/Carousel.jsx';
import Events from './Events/Events.jsx';
import Services from './Services/Services.jsx';
import Gallery from './Gallery/Gallery.jsx';
import Footer from './Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';





const App = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <Events />
        <Services/>
        <Gallery/>
        <Footer />
         
    </div>
  )
}

export default App
