import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181818";
      showAlert("Dark mode has been Enabled!!!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Ligth mode has been Enabled!!!", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      
      
      <Routes>
        <Route path="/about" element={< About mode={mode}/ >} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text To Analyze Below" mode={mode}  />} />
      </Routes>
    
      </div>
      </Router>
      {/* hi*/}
    </>
  );
}

export default App;
