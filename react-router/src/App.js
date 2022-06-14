import {Routes,Route} from "react-router-dom"
import React from 'react'
import { Home } from "./Components/Home";
//  import About from "./Components/About"
import { Contact } from "./Components/Contact";
import Nav from "./Components/Nav";
import Navigate from "./Components/Navigate";
import Products from "./Components/Products";
import Buy from "./Components/Buy";
import Sale from "./Components/Sale";
import NoMatch from "./Components/NoMatch";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
const LazyAbout = React.lazy(() => import('./Components/About'))
function App() {
  return (
     <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="about" element={<React.Suspense fallback='loading'>
          <LazyAbout />
        </React.Suspense>
        }>
        </Route>
        <Route path="contact" element={<Contact/>}>
        </Route>
        <Route path="order-summary" element={<Navigate/>}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<Buy />}></Route>
         <Route path="buy" element={<Buy />}></Route>
         <Route path="sale" element={<Sale/>}></Route>
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserDetails />}></Route>
        </Route>
        
        <Route path="*" element={<NoMatch />}></Route>
        
      </Routes>

      </div>
  );
}

export default App;
/**index here is used to render child */
