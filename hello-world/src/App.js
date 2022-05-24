import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import StateComp from './components/State'
import Increase from './components/Count'
import Sample from './components/Destructure'
import Event from './components/Event';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/Conditionalrendering';
import ListRendering from './components/ListRendering';
function App() {
  return (
    <div className="App">
     {/* <Greet name="Edwin"><p>Optional Text - Children</p></Greet>
     <Welcome name="Aspire Systems"></Welcome>
     <StateComp />
     <Increase />
     <Sample name="Ajith" />
     <Event />
     <EventBind /> */}
     {/* <ParentComponent /> */}
     {/* <ConditionalRendering /> */}
     <ListRendering />
  </div>
  );
}

export default App;
