import React, { useState, useEffect } from 'react'
import Nav from "./components/Nav/Nav"
import Home from "./components/homeComp/Home";
import TextAnimation from './components/Textanimation/TextAnimation';
import GraciasView from './views/gracias/gracias';

import './App.css'
import Example from './views/colorExample/example';

function App() {
  const [count, setCount] = useState(0)
  const gracias = {
    l_main: "Gracias",
    l_sub: "muchas",
    d_main: "Gracias",
    d_sub: "muchas"
  }

  const contents = {
    dark: <TextAnimation/>,
    example: <Example></Example>,
    mode: <TextAnimation {...gracias}/>,
    //gracias: <GraciasView/>,
  }
  
  return (
    <div className="App">
      <Nav  {...{ contents }} ></Nav>
    </div>
  )
}

export default App
