import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import StateComp from './components/State'
import Increase from './components/Count'
import Sample from './components/destructure'
function App() {
  return (
    <div className="App">
     <Greet name="Edwin"><p>Optional Text - Children</p></Greet>
     <Welcome name="Aspire Systems"></Welcome>
     <StateComp />
     <Increase />
     <Sample name="Ajith" />
  </div>
  );
}

export default App;
