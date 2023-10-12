import { useState } from 'react';
import './App.css';

function App() {
 const [headingText, setHeadingText] = useState("")
 const [isMouseOver, setMouseOver] = useState(false)
 const [name, setName] = useState("")


  function onClickHandler(event) {
      setHeadingText(name)
      event.preventDefault()
  }

  function handleMouseOver() {
    setMouseOver(true)
  }
  
  function handleMouseOut() {
    setMouseOver(false)
  }

  function handleChange(event) {
    setName(event.target.value)
  }



  return (
    <div className="container">
      <form onSubmit={onClickHandler}>
      <h1> Hello {headingText}</h1>
      <input type="text" placeholder="What's your name?" onChange={handleChange} value={name} />
      <button style={{backgroundColor: isMouseOver ? "black" : "white"}}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
      </form>
    </div>
  );
}

export default App;
