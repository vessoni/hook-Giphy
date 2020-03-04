import React from "react";
import ReactDOM from "react-dom";

import GifList from './components/GifList'
import "./styles.css";

function App() {

  return (
    <div className="app">
      <h2>Render the API response within the container below.</h2>
      <pre id="response-container">
        <GifList />
      </pre>
    </div>

  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
