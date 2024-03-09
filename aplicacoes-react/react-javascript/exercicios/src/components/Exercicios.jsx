import React, {useState, useEffect, useMemo} from 'react'


//Exercicio 1 - Props
const Greetings = ({name}) => {
  return (
    <div>Ola, seja bem vindo {name}</div>
  )
}


//Exercicio 2 - UseState 
const Counter = () => {
  
  const [count, setCount] = useState (0);

  function handleClickAdd() {
    setCount(count + 1);
  }

  const handleClickDec = () => {
    setCount (count - 1);
  }


  return (
    <>
    <p>Você clicou {count} vezes no botão</p>
    <button onClick={handleClickAdd}>Adicionar 1</button>
    <button onClick={handleClickDec}>Diminuir 1</button>
    </>
  ); 
}

//Exercicio 3 - Lista Condicional
const TaskList = ({tasks}) => {

  //const [task, setTask] = useState ([]);

  if (!tasks) {
    return "não há tarefas a mostrar"
  }

  return (
    <ol>
      {tasks.map ((task) => (
       
          <li key={task.id}>{task.text}</li>
       
      ))}
    </ol>
  )

}

//Exercicio 4 - UseEffect

const UserInfo = ({userInfo}) => {

  useEffect (() => {
    document.title = `${userInfo.name} - ${userInfo.job}`
  }, [userInfo])


  return (
    <div>
      <p>Nome: {userInfo.name}</p>
      <p>Profissão: {userInfo.job}</p>
    </div>
  )
}

//Exercicio 5 - useMemo Fibonacci

const fibonacci = (n) => {
  if (n<=1) {
    return n
  }

  return fibonacci (n-1) + fibonacci (n-2);
}

const FibCalculator = ({num}) => {
  
  const fibResult = useMemo (()=> fibonacci(num), [num]);

  return (
    <div>
      <p>Fibonacci de {num} é {fibResult}</p>
    </div>
  )

}

//Exercicio 6 - custom hook
const useOnlineStatus = () => {
  const [status, setStatus] = useState (navigator.online);

  useEffect (() => {
    const handleOnline = () => setStatus (true);
    const handleOffiline = () => setStatus (false);   

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffiline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffiline);
    }
  }, []);

  return status;  
}

const OnlineStatus = () => {
  const status = useOnlineStatus();

  return (
    <div>
      <p>Você esta atualmente:{status? " Online" : " Offline" }</p>
    </div>
  )
}


const Exercicios = () => {

  const tasks = [
    {id: 1, text: "dormir"},
    {id: 2, text: "comer"},
    {id: 3, text: "estudar"} 
  ];

  const userInfo = {
    name: "Alfredo",
    job: "Dev FrontEnd"
  }


  return (
    <div>
      <Greetings name="Alfredo" />  
      <Counter />
      <br />
      <br />
      <TaskList tasks={tasks}/>
      <UserInfo userInfo={userInfo}/>
      <FibCalculator num={4}/>
      <OnlineStatus />
    </div>
  )
} 



export default Exercicios