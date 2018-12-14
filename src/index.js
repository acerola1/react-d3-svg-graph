import React from 'react';
import ReactDOM from 'react-dom';

import DemoContainer from './DemoContainer';

import './styles.css';

function App() {
  return (
    <div className="App">
      <DemoContainer />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
