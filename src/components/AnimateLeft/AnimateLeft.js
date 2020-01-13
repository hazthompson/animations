import React, { useEffect } from 'react';
import './AnimateLeft.scss';
import anime from 'animejs';

function AnimateLeft() {
  useEffect(() => {
    anime({
      targets: '.turn',
      translateX: [
        { value: 100, duration: 1700 },
        { value: 0, duration: 800 }
      ],
      rotate: '1turn',
      duration: 2000,
      loop: false
    });

    anime({
      targets: '.slide-left',
      translateX: [2000, 0],
      duration: 1500,
      loop: false,
      easing: 'easeInOutSine'
    });
  });

  return <div class="slide-left container-animate" />;
}

export default AnimateLeft;
