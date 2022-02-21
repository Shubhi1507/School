import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from './screen/dashboard';
// import Button from './components/Button';
// import EventBind from './components/EventBind';
// import Loginscreen from './screen/Loginscreen';
//  import RegistrationScreen from './screen/RegistrationScreen'
import Button from "./components/Button";
import ListorArray from "./components/ListorArray";
import Hooks from "./components/Hooks";
import TodoList from "./components/TodoList";
import MyContextExample from "./components/ContextHook/Mycontextexample";
//  import Parent from "./components/Parent";
// import Practice from "./screen/Practice";
// import RegistrationScreen from "./screen/RegistrationScreen";
// import Child2 from "./components/Child2";
// import Practice from './screen/Practice';
// import Navbar from './screen/Navbar';

function App() {
  return (
    <div className="App">
      <MyContextExample/>
    </div>

    //   <BrowserRouter>
    //   <Routes>
    //    <Route path="/" element={<Dashboard/>}  />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
