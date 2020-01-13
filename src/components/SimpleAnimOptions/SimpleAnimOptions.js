import React, { useEffect } from 'react';
import './SimpleAnimOptions.scss';
import anime from 'animejs';

function SimpleAnimOptions() {
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
      targets: '.slide-delay',
      translateY: [
        { value: 100, duration: 1100, delay: 2200 },
        { value: 0, duration: 1100 }
      ],
      loop: false,
      easing: 'easeInOutSine'
    });
    anime({
      targets: '.keyframe',
      keyframes: [
        { translateY: -40 },
        { translateX: 250 },
        { translateY: 40 },
        { translateX: 0 },
        { translateY: 0 }
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });
    anime({
      targets: '.stretch',
      width: '100%', // -> from '28px' to '100%',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: 4
    });
  });

  return (
    <div className="container">
      <div className="turn grid-cell-1">1</div>
      <div className="keyframe grid-cell-2">2</div>
      <div className="slide-delay grid-cell-3">3</div>
      <div className="slide grid-cell-4">4</div>
      <div className="stretch grid-cell-5">5</div>
    </div>
  );
}

export default SimpleAnimOptions;
