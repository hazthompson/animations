import React from 'react';

import './App.css';
import CollageScroll from './components/CollageScroll';
import DrawIn from './components/DrawIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <DrawIn />
        <CollageScroll />
      </body>
    </div>
  );
}

export default App;
