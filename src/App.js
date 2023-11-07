import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Alert from './Components/Alerts'
import TextFrom from "./Components/TextForm";
import About from "./Components/About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.add('dark-mode');
      showAlert("Dark mode has been enabled.", "success", 1500);
      document.title = "TextUtils - Dark Mode";
    }else{
      setMode('light');
      document.body.classList.remove('dark-mode');
      showAlert("Light mode has been enabled.", "success", 1500);
      document.title = "TextUtils - Light Mode";
    }
  };

  const showAlert = (message, type, showTime) => {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, showTime);
  };

  return (
    <>
        <Navbar mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <Routes>
          <Route index element={<TextFrom mode = {mode} showAlert = {showAlert}/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
    </>
  );
}

export default App;
