import { useState } from "react";
import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from 'react';
import Alert from './components/Alert'


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
    },2500);
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
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode ={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About/> */}
        <TextForm showAlert={showAlert} heading="Enter the text Analyze"  mode={mode} />
      </div>
    </>
  );
}

export default App;
