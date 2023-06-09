import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home' ; 
import Navbar from './components/Navbar';
// import Info from "./components/info" ; 
import Modal from './components/Modal';
function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/afterlogin" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Info" element={<Modal />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
