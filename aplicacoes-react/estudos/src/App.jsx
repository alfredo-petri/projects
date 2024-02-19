//import css
import './App.css';

import React, { useState } from 'react';

//import components
import TemplateExpressions from './components/TemplateExpressions.jsx';
import Challenge from './components/Challenge.jsx';
import Hooks from './components/Hooks.jsx';
import ListRender from './components/ListRender.jsx';
import ConditionalRender from './components/ConditionalRender.jsx';
import Props from './components/Props.jsx';
import PropsDestructuring from './components/PropsDestructuring.jsx';
import ExecuteFunction from './components/ExecuteFunction.jsx';
import Message from './components/Message.jsx';
import ChangeMessage from './components/ChangeMessage.jsx';
import Exercicio4 from './components/Exercicio4.jsx';
import FirstForm from './components/FirstForm.jsx';

//main function
function App() {
  const user = {nome: "Alfredo", idade: 32, cidade: "Pinhais"};
  const pessoas = [
    {id: 1, nome: "Pedro", idade: 28, cidade: "Altamira"},
    {id: 2, nome: "Luna", idade: 13, cidade: "São Paulo"},
    {id: 3, nome: "Clara", idade: 56, cidade: "Curitiba"},
  ];

  const people = [
    {id: 1, nome: "Pedro", idade: 28, profissao: "Engenheiro"},
    {id: 2, nome: "Luna", idade: 13, profissao: "Estudante"},
    {id: 3, nome: "Clara", idade: 36, profissao: "Bombeira"},
  ];

  const showMessage =  () => {
    alert('Evento do componente pai');
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage (msg);
  };

  return (
    <>
      <h1>Bem-vindo</h1>
      
      <TemplateExpressions />

      <Challenge />
      
      <Hooks />
      
      <ListRender/>
      
      <ConditionalRender />
      
      <Props name = "Alfredo" age={32} city="Pinhais"/>

      <h3>Props detructuring</h3>
      <PropsDestructuring name = {user.nome} age={user.idade} city={user.cidade}/>
      
      {/*Reaproveitando Componentes com loop em array de objetos*/}
      <h3>Reaproveitamento de componentes</h3>
      {pessoas.map ((pessoa) => (
        <PropsDestructuring 
          key = {pessoa.id}
          name = {pessoa.nome} 
          age = {pessoa.idade} 
          city = {pessoa.cidade} 
        />
      ))}

      <ExecuteFunction myFunction={showMessage} />
      
      <br />
      <br />

      {/*StateLift*/}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>

      <br />

      {people.map ((person) => (
        <Exercicio4 
          key = {person.id}
          name = {person.nome} 
          age = {person.idade} 
          job = {person.profissao} 
        />
      ))}

      <FirstForm user={{name: "Josias", email: "josias@gmail.com"}}/>

    
    </>

  )
}

export default App
