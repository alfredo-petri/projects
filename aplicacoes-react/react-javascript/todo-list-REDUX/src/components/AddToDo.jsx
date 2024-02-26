import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";
import {useState} from "react";

const AddToDo = () => {
  
  const [input, setInput] = useState ("");
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim() === "") return;
    dispatch(addTodo(input));
    setInput ("");
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Adicione uma tarefa...'/>
        <button type='submit' className='submit'>Cadastrar</button>

      </form>                
                
    </div>
  )
}

export default AddToDo