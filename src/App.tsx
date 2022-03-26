import React from "react";
import "./App.css";

const routeChange = () => {
  let path = `https://photos.app.goo.gl/pxRJYoHjUGbkRdNT6`;
  window.location.href = path;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={routeChange}>Maks</button>
      </header>
    </div>
  );
}

export default App;
