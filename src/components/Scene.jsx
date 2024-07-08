import React from 'react';
import { Canvas} from '@react-three/fiber';

import Model from './Model';

const Scene = ({ modelUrl, rotation, pushTarget, position}) => {
 
  return (
    <div className='h-screen w-full'>
      <Canvas camera={{ position: [0, 2, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model
          url={modelUrl}
          initialRotation={rotation}
          position={position}
         
        />
      </Canvas>
    </div>
  );
};

export default Scene;