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
import StyleSheeet from './components/StyleSheet'
import InlineStyle from './components/InlineStyle';
import './components/AppStyling.css'
import styles from './components/AppStyling.module.css'
import FormComponent from './components/Form';
function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Regular Stylesheet</h1> Can be used inside child component too 
      <h1 className={styles.success}>Css Modules</h1> Locally scoped */}
     {/* <Greet name="Edwin"><p>Optional Text - Children</p></Greet>
     <Welcome name="Aspire Systems"></Welcome>
     <StateComp />
     <Increase />
     <Sample name="Ajith" />
     <Event />
     <EventBind /> */}
     {/* <ParentComponent /> */}
     {/* <ConditionalRendering /> */}
     {/* <ListRendering /> */}
     {/* <StyleSheeet className={true} /> */}
     {/* <InlineStyle /> */}
     <FormComponent />
  </div>
  );
}

export default App;
