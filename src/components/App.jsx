import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState("Hello");

  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeading("Submitted!");
  }

  function mouseOver() {
    setMouseOver(true);
  }

  function mouseHoverOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{
          backgroundColor: isMousedOver ? "black" : "white"
        }}
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseHoverOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
