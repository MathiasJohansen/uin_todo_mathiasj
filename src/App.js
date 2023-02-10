import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

const todoStart = [
  {
    id:0,
    title: "Lage middag",
    content: "Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? ",

  }
]

function App() {
  return (
    <>
    <Navbar username="mathialj"/>
    <Todos todoStart={todoStart}/>
    </>
  );
}

export default App;
