import logo from './logo.svg';
import './App.css';
import Axios from './Components/Axios/Axios';
import Form from './Components/Axios/Form';
import HooksCounter from './Components/Hooks/HooksCounter';
import ObjectHooks from './Components/Hooks/ObjectHooks';
import ArrayHook from './Components/Hooks/ArrayHooks';
import HooksCounterTwo from './Components/Hooks/UseEffect';
import Test from './Components/Hooks/Test';
import HooksForm from './Components/Hooks/ConditonalRender';
import MouseMove from './Components/Hooks/MouseMove';
import Toggle from './Components/Hooks/Toggle';
import Timer from './Components/Hooks/Timer';
import GetData from './Components/Hooks/GetData';
import GetDataId from './Components/Hooks/GetDataId';
import ComponentA from './Components/Hooks/Normal Context/ComponentA';
import React, { useReducer } from 'react';
import ComponentX from './Components/Hooks/Context Hooks/ComponentX';
import Counter from './Components/Hooks/Use Reducer/Counter';
import CounterObject from './Components/Hooks/Use Reducer/CounterObject';
import MultiReducer from './Components/Hooks/Use Reducer/MultiReducer';
import CmpA from './Components/ReducerContext/CompA';
import CmpB from './Components/ReducerContext/CompB';
import CmpC from './Components/ReducerContext/CompC';
import RegularUseState from './Components/ReducerAxios/RegularUseState';
import WithReducer from './Components/ReducerAxios/WithUseReducer';
import ParentCmp from './Components/Callback/ParentCmp';
import Counters from './Components/UseMemo/Counters';
import RefComp from './Components/Ref/Ref';
import RefClass from './Components/Ref/RefTwo';
import RefUseCase from './Components/Ref/RefUseCase';
import CustomHook from './Components/CustomHooks/CustomHook';
import CounterOneCustom from './Components/CustomHooks/CounerOneCustom';
import CounterTwoCustom from './Components/CustomHooks/CounterTwoCustom';
import FormHook from './Components/CustomHooks/Form';
const UserContext = React.createContext()
const ChannelContext = React.createContext()
const initialCount = 0
let reducer = (state,action) => {
  switch(action){
    case 'increment' : return state + 1
    case 'decrement' : return state - 1
    case 'reset' : return initialCount
    default : return state
    }
}
let CounterContext = React.createContext()
function App() {
  let [count,dispatch] = useReducer(reducer,initialCount)
  return (
    <div className="App">
     {/* <Axios /> */}
     {/* <Form /> */}
     {/* <HooksCounter /> */}
     {/* <ObjectHooks /> */}
     {/* <ArrayHook /> */}
     {/* <HooksCounterTwo /> */}
     {/* <Test /> */}
     {/* <HooksForm /> */}
     {/* <MouseMove /> */}
     {/* <Toggle /> */}
     {/* <Timer /> */}
     {/* <GetData /> */}
     {/* <GetDataId /> */}
     {/* <UserContext.Provider value="akash">
       <ChannelContext.Provider value="edwin">
       <ComponentA />
       </ChannelContext.Provider>
     </UserContext.Provider> */}
     {/* <UserContext.Provider value="saju">
       <ChannelContext.Provider value="vasi">
       <ComponentX />
       </ChannelContext.Provider>
     </UserContext.Provider> */}
     {/* <Counter /> */}
     {/* <CounterObject /> */}
     {/* <MultiReducer /> */}
     {/* <CounterContext.Provider value={{countState : count, countDispatch : dispatch}}>
          count = {count}
          <CmpA />
          <CmpB />
          <CmpC />
     </CounterContext.Provider> */}
     {/* <RegularUseState /> */}
     {/* <WithReducer /> */}
     {/* <ParentCmp /> */}
     {/* <Counters /> */}
     {/* <RefComp /> */}
     {/* <RefClass /> */}
     {/* <RefUseCase /> */}
     {/* <CustomHook /> */}
     {/* <CounterOneCustom />
     <CounterTwoCustom /> */}
     <FormHook />
    </div>
  );
}
export {UserContext,ChannelContext} 
export {CounterContext}
export default App;
