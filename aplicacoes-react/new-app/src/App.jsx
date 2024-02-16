//import css
import './App.css'

//import components
import TemplateExpressions from './components/TemplateExpressions.jsx';
import Challenge from './components/Challenge.jsx';
import Hooks from './components/Hooks.jsx';
import ListRender from './components/ListRender.jsx';

//main function
function App() {
  return (
    <>
      <h1>Bem-vindo</h1>
      <TemplateExpressions />
      <Challenge />
      <Hooks />
      <ListRender/>
    </>
  )
}

export default App
