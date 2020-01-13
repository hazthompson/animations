import React from 'react';

import './App.css';
import CollageScroll from './components/CollageScroll';
import DrawIn from './components/DrawIn';
import AnimateLeft from './components/AnimateLeft';
import AnimateRight from './components/AnimateRight';
import SimpleAnimOptions from './components/SimpleAnimOptions';

function App() {
  return (
    <div className="App">
      <body>
        <AnimateLeft />
        <AnimateRight />
        <SimpleAnimOptions />
        <DrawIn />
        <CollageScroll />
      </body>
    </div>
  );
}

export default App;
