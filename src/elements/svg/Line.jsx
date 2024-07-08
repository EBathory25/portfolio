
import React, { useRef , useEffect, useState} from 'react';
import ReusableObserver from '../../components/ReusableObserver';

const Line = ({ direction, straight }) => {
 
  let path = '';
  let width = 250;
  let height = 100;

 
 
  if (straight) {
    switch (direction) {
      case 'left':
      case 'right':
        path = 'M 0,50 L 250,50'; // Straight line horizontal
        width = 250;
        height = 100;
        break;
      case 'top':
      case 'bottom':
        path = 'M 50,0 L 50,250'; // Straight line vertical
        width = 100;
        height = 250;
        break;
      default:
        path = 'M 0,50 L 250,50';
        width = 250;
        height = 100;
        break;
    }
  } else {
    switch (direction) {
      case 'left':
        path = 'M 250,50 L 0,50'; // Reverse horizontal line
        width = 250;
        height = 100;
        break;
      case 'right':
        path = 'M 0,50 L 250,50'; // Straight line horizontal
        width = 250;
        height = 100;
        break;
      case 'top':
        path = 'M 50,250 L 50,0'; // Reverse vertical line
        width = 100;
        height = 250;
        break;
      case 'bottom':
        path = 'M 50,0 L 50,250'; // Straight line vertical
        width = 100;
        height = 250;
        break;
      default:
        path = 'M 0,50 L 250,50';
        width = 250;
        height = 100;
        break;
    }
  }

  return (
    <ReusableObserver
    className={`line line-${direction} ${straight ? 'line-straight' : ''}`}
    addClass="animate-line"
    removeClass=""
  >
    <svg width="200" height="100">
      <path d={path} stroke="#EE5D3C" strokeWidth="5" fill="transparent" />
    </svg>
  </ReusableObserver>
  );
};

export default Line;