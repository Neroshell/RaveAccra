import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Button from '../Buttons/Button.jsx';


import './ContactData.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here, e.g., send data to server
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='form-main'>
          <h1>Contact Form</h1>
          <div className='form-group  mb-3'>
            <Field type="text" name="name" id="name" className="form-control" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className='form-group  mb-3'>
            
            <Field type="text" name="email" id="email" className="form-control" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className='form-group  mb-3'>
            
            <Field as="textarea" name="message" id="message" className="form-control text-area" placeholder="Message"/>
            <ErrorMessage name="message" component="div" className="error" />
          </div>
          <Button name="Submit" type="submit" disabled={isSubmitting} className="btn btn-primary">
            
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
