import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import QuizList from "./components/quizList/QuizList";
import "./App.css";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <>
      <div className="container" style={{ backgroundColor: "white" }}>
        <div className="headerContainer" style={{ display: "flex" ,justifyContent:"space-between"}}>
          <header className="header">
            <span className="title" style={{fontSize:'2rem',fontWeight:'bold'}}>QuizzyBits</span>
            <p className="subtitle" style={{fontSize:'auto'}}>Unleash your knowledge with fun quizzes!</p>
          </header>
          <nav className="navbar">
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </nav>
        </div>
        <div className="App">
          <AppRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
