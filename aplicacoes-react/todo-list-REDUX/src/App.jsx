import AddToDo from "./components/AddToDo"
import TodoList from "./components/TodoList"

function App() {


  return (
    <div className='container'>
    <h1>TO DO List - Redux</h1>
    <AddToDo/>
    <TodoList/>
    </div>
  )
}

export default App
