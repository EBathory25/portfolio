import React, { useRef, useEffect, useState} from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer} from 'three';

const Model = ({ url, initialRotation,  animate, position }) => {
  const gltf = useLoader(GLTFLoader, url);
  const avatarRef = useRef();
  const mixer = useRef();

  useEffect(() => {
    if (gltf.animations.length) {
      mixer.current = new AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }

  }, [gltf]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });
  return (
    <primitive
      ref={avatarRef}
      object={gltf.scene}
      scale={[1.5, 1.5, 1.5]}
      position={position}
      rotation={initialRotation}
    />
  );
};

export default Model;