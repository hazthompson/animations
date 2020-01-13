import React, { useEffect } from 'react';
import './AnimateRight.scss';
import anime from 'animejs';

function AnimateRight() {
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
      targets: '.slide',
      translateY: [
        { value: 100, duration: 1100 },
        { value: 0, duration: 1100 }
      ],
      loop: false,
      easing: 'easeInOutSine',
      opacity: '0.5'
    });
    anime({
      targets: '.slide-right',
      translateX: [-2000, 0],
      duration: 1500,
      loop: false,
      easing: 'easeInOutSine'
    });
  });

  return <div class="slide-right container-animate" />;
}

export default AnimateRight;
