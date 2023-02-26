import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {useState} from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";



function App() {
  const [mode, setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-Dark Mode";   //we can change title also
      // setInterval(() => {
      //   document.title="Install TextUtils";   //Dynamic Title
      // }, 1000);
      // setInterval(() => {
      //   document.title="Warning";   //Dynamic Title
        
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils-Light Mode";
      
    }
  }

  const [alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,  
      type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500); //alert will automatically hide after 1.5sec 
  }

  const [theme, setTheme]=useState('light');
  const onGreen=()=>{
    if(mode=='light'){
    setTheme(document.body.style.backgroundColor='Green');}
  }
  const onBlue=()=>{
    if(mode=='light'){
    setTheme(document.body.style.backgroundColor='Blue');}
  }
  
  return (
    <>
    <Router>
      <Navbar/>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} onGreen={onGreen} onBlue={onBlue}/>

      <Alert alert={alert}/>
      
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<TextForm heading="Enter your text" mode={mode} showAlert={showAlert}/>}></Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
