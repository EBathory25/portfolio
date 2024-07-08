import React from 'react';
import ReusableObserver from '../components/ReusableObserver';





const InfoBox = ({ title, content, openModal, direction }) => {
  console.log("content",content.images)

  return (
    <ReusableObserver
    className={`info-box ${direction} text-orange p-4 rounded-lg shadow-lg relative cursor-pointer bg-cover h-64 bg-center flex items-center justify-center max-w-full`}
    addClass="add-animation"
    style={{ backgroundImage: `url(${content.images})`}}
    removeClass="remove-animation"
    onClick={() => {openModal(content)}}
  >
  
   
  </ReusableObserver>
  );
};

export default InfoBox;