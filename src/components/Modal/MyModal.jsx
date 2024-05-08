import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../Buttons/Button.jsx';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './modal.css';


const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  guests: Yup.number()
    .required('Number of guests is required')
    .min(1, 'Number of guests must be at least 1')
    .max(20, 'Number of guests cannot exceed 20'), // Add max validation here
  date: Yup.date().required('Date is required'),
});


const MyModal = ({ show, onHide }) => {
  const initialValues = {
    firstname: '',
    email: '',
    guests: '',
    date: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here, e.g., send data to server
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Modal show={show} onHide={onHide} className='modal-reserve'>
      <Modal.Body className='modal-body'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form  className='modal-form'>
              <h3>VIP Reservation</h3>
              <div className="mb-3">
                <Field name="firstname" type="text" className='form-control modal-input-box'  placeholder='Firstname' />
                <ErrorMessage name="firstname" component="div" className="error-message" />
              </div>
              
              <div className="mb-3">
            
                <Field name="email" type="email" className='form-control modal-input-box'  placeholder='Email '/>
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              
              <div className="mb-3">
               
                <Field name="guests" type="number" className='form-control modal-input-box'  placeholder='Number of Guests' />
                <ErrorMessage name="guests" component="div" className="error-message" />
              </div>
              
              <div className="mb-3">
               
                <Field name="date" type="date" className='form-control modal-input-box'  />
                <ErrorMessage name="date" component="div" className="error-message" />
              </div>

              <Button name='Submit' type="submit" disabled={isSubmitting} style={{ margin: '20px auto' }} />
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;