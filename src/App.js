import React from 'react';
import './App.css';
import ReactVisPage from "./react-vis/ReactVisPage";

function App() {
    return (
        <div id={'App'}>
            <div>
                <h1>React Visualization Test</h1>
                <p>This is a test application to toy with and demo visualization systems in react</p>
            </div>
            <ReactVisPage/>
            <p>TODO add more examples</p>
        </div>
    );
}

export default App;
