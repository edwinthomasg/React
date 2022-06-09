import logo from './logo.svg';
import './App.css';
import Cookies from './Components/Cookies';
import {Provider} from 'react-redux'
import store from './Components/Store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Cookies />
    </div>
    </Provider>
    
  );
}

export default App;
