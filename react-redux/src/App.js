import logo from './logo.svg';
import './App.css';
// import CookieComponent from './Components.js/CookieComponent';
import {Provider} from 'react-redux'
import store from './Store';
import HooksCookieComp from './Components.js/HooksCookieComp';
import UserComponent from './Components.js/UserComponent';
import userStore from './UserRedux/UserStore';
console.log("user store : ",userStore)
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     
      {/* <CookieComponent allow  />
      <HooksCookieComp /> */}
      <UserComponent />
     
    </div>
    </Provider>
    )
}

export default App;
