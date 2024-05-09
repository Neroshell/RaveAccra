import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/rave_logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import Button from '../Buttons/Button.jsx';
import MyModal from '../Modal/MyModal.jsx';

const inbutton = {
  '@media (min-width: 992px)': {
    marginLeft: '90px',
  },
  margin: '0 auto',
 
};



const MyNavbar = () => {

  const [showModal, setShowModal] = useState(false);
  
  const handleShowModal = () => {
    setShowModal(true);
    console.log("Modal should show");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
   
  
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsFixed(window.innerWidth <= 767);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <Navbar variant="dark" expand="lg" className="my-navbar" fixed={isFixed ? "top" : null} >
      <Navbar.Brand href="/">
        <img
          src={logo}
          alt="Rave Logo"
          className="d-inline-block align-top nav-logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} style={{marginRight: "20px"}}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? 'show' : ''}>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/bottleService">Bottle service</Nav.Link>
          <Nav.Link href="/event">Event</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
          
        </Nav>
        <Button name='RESERVE VIP' style={inbutton} onClick={handleShowModal} />       

      </Navbar.Collapse>
    </Navbar>
    <MyModal  show={showModal} onHide={handleCloseModal} />
    </>
    
  );
};

export default MyNavbar;
