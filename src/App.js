import React from 'react';
import './App.css';
import ReactVisPage from "./react-vis/ReactVisPage";

function App() {
  return (
    <div className="App">
      <h1>React-Vis Module</h1>
      <p>Documentation: <a href={'https://uber.github.io/react-vis/'}>link</a></p>
      <ReactVisPage/>
      <br/>
      <hr/>
      <p>TODO add more examples</p>
    </div>
  );
}

export default App;
