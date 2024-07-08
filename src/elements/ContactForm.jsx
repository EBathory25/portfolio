import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LottieAnimation from './LottieAnimation';
import axios from 'axios';
import mail from './mail.json'


const ContactForm = ({ className, onFormSuccess, fadeOut }) => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('https://formspree.io/f/xpwazjrj',{values})
      console.log("response form form", response)
      if (response.status === 200) {
          onFormSuccess();
        resetForm();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <div className={`contact-form top-0 rounded-lg  ${className} ${fadeOut ? 'fade-out' : ''}`}>
    <div className="contact-box ">
      <h2 className="text-2xl font-bold mb-4 text-creamy-white p-4 text-center">Contact Me</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4 flex justify-center">
                <LottieAnimation animation={mail} />
              </div>
              <div className="w-full md:w-1/2">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-creamy-white">Name</label>
                  <Field type="text" id="name" name="name" className="mt-1 block w-full text-dark-blue rounded-md p-2" />
                  <ErrorMessage name="name" component="div" className="text-red text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-creamy-white">Email</label>
                  <Field type="email" id="email" name="email" className="mt-1 block w-full text-dark-blue   rounded-md p-2" />
                  <ErrorMessage name="email" component="div" className="text-red text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-creamy-white">Message</label>
                  <Field as="textarea" id="message" name="message" className="mt-1 block w-full text-dark-blue  rounded-md p-2" />
                  <ErrorMessage name="message" component="div" className="text-red text-sm mt-1" />
                </div>
                <button type="submit" className="bg-orange text-creamy-white p-2 my-2 rounded-md w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
  );
};

export default ContactForm;
