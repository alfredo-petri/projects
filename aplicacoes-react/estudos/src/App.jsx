//import css
import './App.css'

import React, { useState } from 'react'

//import components
import TemplateExpressions from './components/TemplateExpressions.jsx';
import Challenge from './components/Challenge.jsx';
import Hooks from './components/Hooks.jsx';
import ListRender from './components/ListRender.jsx';
import ConditionalRender from './components/ConditionalRender.jsx';
import Props from './components/Props.jsx';

//main function
function App() {

  const idade = 32;
  const cidade = useState ("Pinhais");

  return (
    <>
      <h1>Bem-vindo</h1>
      <TemplateExpressions />
      <Challenge />
      <Hooks />
      <ListRender/>
      <ConditionalRender />
      <Props name = "Alfredo" idade={idade} cidade={cidade}/>
    </>
  )
}

export default App
