import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import logo from '../../assets/rave_logo.png';
import "./Footer.css";

const Footer = () => {
  return (
    <MDBFooter className='footer' color='white' >

        <section className='mb-4'>
          <div className="img-container">
            <img src={logo} alt="Rave Logo" className="img-fluid" />
          </div>
        </section>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.twitter.com' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
        </section>
        
      

        <section>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' className='mb-4' placeholder='Enter your email'/>
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright<a className='text-white' href='https://mdbootstrap.com/'> Rave accra</a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
