import { useState } from "react";
import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from 'react';
import Alert from './components/Alert'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// let name = " Shailendra Kumar Pandey"
function App() {
  const [mode,setMode] = useState("light"); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='gray';
      showAlert("Dark mode has been enable","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode ={toggleMode} setMode={setMode} showAlert={showAlert}/>
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text Analyze"  mode={mode} />
              {/* </Route>
        </Switch> */}
        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
