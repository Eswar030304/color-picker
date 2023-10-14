import './App.css';
import {SketchPicker} from 'react-color'
import { useState } from "react";

function App() {

  const [currentColor , setCurrentColor] =useState("#ffff")
  const hanleOnChange = (color)=>{
    setCurrentColor()
  }
  return (
    <div className="App">

      <h1>React color picker</h1>

      <SketchPicker
      color={currentColor}
      onChangeComplete={hanleOnChange(color)}
      />

    </div>
  );
}

export default App;
