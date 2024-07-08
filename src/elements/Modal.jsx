import React from 'react';
import Content from '../components/Content';

const Modal = ({ content,closed, closeModal, imageUrl }) => {
  console.log("closed", closed)
  return (
    <div className={`modal ${closed ?'closed':''} z-30 fixed inset-0 h-full bg-opacity-30 flex items-center justify-center`}>
      <div className="modal-content relative w-11/12 md:w-1/2 max-h-full p-8 rounded-lg shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-lg"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <button className="absolute top-2 right-2 text-white bg-black rounded-full px-10 z-20" onClick={closeModal}>
          &times;
        </button>
        <div className="relative z-20 modal-container flex flex-col justify-start items-center  p-4 rounded-lg w-full max-h-full overflow-auto">
          <Content {...content} />
        </div>
      </div>
    </div>
  );
};


export default Modal;