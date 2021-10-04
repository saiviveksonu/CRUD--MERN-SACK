import logo from './logo.svg';
import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Error from './components/Error';
function App() {
  return (<>
    <div>
    <Navbar/>
    <Route  exact path="/">
      <Home></Home>
    </Route>
    <Route exact path="/about">
      <About></About>
    </Route>
    <Route  exact path="/contact">
      <Contact></Contact>
    </Route>
    <Route  exact path="/login">
      <Login></Login>
    </Route>
    <Route  exact path="/signup">
      <Signup></Signup>
    </Route>
    <Route exact path="/logout">
      <Logout/>
    </Route>
    </div>
    </>
  );
}
export default App;
