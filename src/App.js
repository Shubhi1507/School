import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from './screen/dashboard';
// import Button from './components/Button';
// import EventBind from './components/EventBind';
// import Loginscreen from './screen/Loginscreen';
import RegistrationScreen from './screen/RegistrationScreen'

function App() {
  return (
    <div className='App'>
    <RegistrationScreen/>
    
    
    </div>
    
  //   <BrowserRouter>
  //   <Routes>
  //    <Route path="/" element={<Dashboard/>}  />
  //   </Routes>
  // </BrowserRouter>
  );
}

export default App;
