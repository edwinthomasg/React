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
import Fragment from './components/Fragments';
import Parent from './components/ParentComp';
import RefComponent from './components/RefComp';
import ParentInput from './components/ParentInput';
import ParentRef from './components/ParentRef';
import PortalComponent from './components/Portal';
import ParentPortal from './components/ParentPortal';
import Test1 from './components/Test1';
import ErrorTest from './components/ErrorComponent';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import CounterProp from './components/CounterProp';
import HoverCounterTwo from './components/HoverCounterTwo';
import ComponentA from './components/Context/ComponentA';
import { UserProvider } from './components/Context/Context';
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
     {/* <FormComponent /> */}
     {/* <Fragment /> */}
     {/* <Parent /> */}
     {/* <RefComponent /> */}
     {/* <ParentInput /> */}
     {/* <ParentRef /> */}
     {/* <PortalComponent /> */}
     {/* <ParentPortal /> */}
     {/* <Test1 /> */}
     {/* <ErrorTest /> */}
     {/* <ClickCounter name="edie" />
     <HoverCounter /> */}
     {/* <ClickCounterTwo name= {() => "kohli"} /> */}
     {/* <CounterProp render = {(count,incrementHandler) => {
       return <ClickCounterTwo count = {count} incrementHandler = {incrementHandler}></ClickCounterTwo>
     }}/>
     <CounterProp render = {(count,incrementHandler) => {
       return <HoverCounterTwo count = {count} incrementHandler = {incrementHandler}></HoverCounterTwo>
     }}/> */}
     <UserProvider value="Chandru">
          <ComponentA />
     </UserProvider>
  </div>
  );
}

export default App;
