import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          바로바로
        </a>
      </header>
      <Test></Test>
    </div>
  );
}

export default App;
