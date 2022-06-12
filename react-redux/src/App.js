import logo from './logo.svg';
import './App.css';
import CookieComponent from './Components.js/CookieComponent';
import {Provider} from 'react-redux'
import store from './Redux/Store';
import HooksCookieComp from './Components.js/HooksCookieComp';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <CookieComponent />
      <HooksCookieComp />
      </Provider>
     
    </div>
  );
}

export default App;
