import React from "react";
import { createRoot } from "react-dom";


const App = () => {
  const update = () => {
    const element = (
      <>
        
        <div className="bg-dark text-white text-center text-uppercase fw-bold fs-4 p-3">
    Simple Concept of Virtual Dom
        </div>
        <div className="text-center marg mb-5">
        <h3>Virtual Dom React:</h3>
        <form>
          <input type="text" />
        </form>
        <span>Time: {new Date().toLocaleTimeString()}</span>
        </div>
      </>
    );
    root.render(element);
  };

  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  setInterval(update, 1000);
};

export default App;
