import './App.css';
import React, { useState } from 'react';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light");
  const [act, setAct] = useState("Enable");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setAct("Disable");
      document.body.style.backgroundColor = '#231f45';
      document.body.style.color = 'white';
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode("light");
      setAct("Enable");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} act={act} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} title="Enter the Text!" />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
