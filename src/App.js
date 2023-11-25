import "./App.css";
import  Navbar  from "./components/customNavbar.js";
import Home from "./components/Home";
import About from "./components/About.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import Alert  from "./components/alert";
import 'bootstrap/dist/css/bootstrap.min.css';
import Instructions from "./components/Instructions.js";
import Contactus from "./components/Contactus.js";
import Footer from "./components/Footer.js";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>} />
              <Route exact path="/about" element={<About showAlert={showAlert}/>} />
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
              <Route exact path="/instructions" element={<Instructions showAlert={showAlert}/>} />
              <Route exact path="/contactus" element={<Contactus showAlert={showAlert}/>} />
          
            </Routes>
          </div>
      <Footer/>

        </Router>
      </NoteState>
    </>
  );
}

export default App;