import { useState } from 'react';
import './App.css';

function App() {
 const [headingText, setHeadingText] = useState("Hello")
 const [isMouseOver, setMouseOver] = useState(false)


  function onClickHandler() {
      setHeadingText("Submitted")
  }

  function handleMouseOver() {
    setMouseOver(true)
  }
  
  function handleMouseOut() {
    setMouseOver(false)
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: isMouseOver ? "black" : "white"}} onClick={onClickHandler} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
    </div>
  );
}

export default App;
