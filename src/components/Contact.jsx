import React,{useState} from 'react';
import { Element } from 'react-scroll';
import ContactForm from '../elements/ContactForm';
import LottieAnimation from '../elements/LottieAnimation';
import success from '../elements/success.json'
import Svg_Mountains from '../elements/svg/svg_mountains'


const Contact = () => {
  const [showOk, setShowOk] = useState(false)
  const [showForm, setShowForm] = useState(true)

  const handleFormSuccess = () => {
   setShowOk(true)
   setShowForm(false)
  };


  return (
    <Element name="contact" className="h-screen w-full flex flex-col justify-center items-center relative">
    <Svg_Mountains />
    <div className="flex flex-col z-10 md:flex-row w-full mb-10 items-center justify-center max-w-5xl mx-auto top-0 absolute">
      <div className="w-full md:w-4/5 flex flex-col md:items-start relative z-10">
        {showForm && <ContactForm className="w-full" onFormSuccess={handleFormSuccess} />}
        {showOk && (
          <div className="text-center flex flex-col">
            <LottieAnimation animation={success} height={200} width={200} />
            <p className="mt-4 text-lg text-creamy-white font-semibold">Thank you for your interest!</p>
          </div>
        )}
      </div>
      
    </div>
  </Element>
  );
};

export default Contact;
