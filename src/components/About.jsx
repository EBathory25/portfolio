import React, { useState } from 'react';
import { Element } from 'react-scroll';
import Scene from './Scene';
import InfoBox from '../elements/InfoBox';
import { topics } from '../data';
import Modal from '../elements/Modal';
import SvgGradient from '../elements/svg/svg_gradient';


const About = () => {
  const model = '/models/dancing.glb';
  const model2 = '/models/streching.glb';

  const [modalContent, setModalContent] = useState(null);
  const [modalImage, setModalImage] = useState('');
  const [closed, setClosed] = useState(true);
  const [ isModalOpen, setIsModalOpen] = useState(false)


  const openModal = (content, imageUrl) => {
    setModalContent(content);
    setModalImage(imageUrl);
    setClosed(false);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setClosed(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setModalContent(null);
      setModalImage(null);
    }, 500);
  };

  return (
    <Element name="about" className="about-section w-full z-20 flex flex-col md:flex-row items-center justify-between">
   <SvgGradient/>
    <div className="model-container w-full md:w-1/4 flex items-center order-1 justify-center mb-8 md:mb-0">
   
      <div className="scene-container w-full" style={{ height: '50vh' }}>
        <Scene modelUrl={model} position={[0, 0.8, 3.2]}/>
      </div>
    </div>
    <div className="flex-1 w-full grid justify-center grid-cols-1 items-center order-2 md:grid-cols-2 gap-10 p-10">
      {topics.map((topic, index) => (
        <InfoBox key={index} title={topic.title || 'Projects'} direction={topic.direction} content={topic} openModal={() => openModal(topic, topic.images)} />
      ))}
    </div>
    <div className="model-container w-full md:w-1/4 flex items-center order-3 justify-center mt-8 md:mt-0">
      <div className="scene-container w-full" style={{ height: '50vh' }}>
        <Scene modelUrl={model2} position={[0, 0.8, 3.2]}/>
      </div>
    </div>
    {modalContent && <Modal closed={closed} content={modalContent} closeModal={closeModal} imageUrl={modalImage} />}
  </Element>
  );
};

export default About;
