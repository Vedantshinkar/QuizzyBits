import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import QuizList from './components/QuizList';
import './App.css';

function Home() {
  return (
    <div className="home">
      <h1 className="title">QuizzyBits</h1>
      <p className="subtitle">Unleash your knowledge with fun quizzes!</p>
      <Link to="/login" className="start-button">Get Started</Link>
    </div>
  );
}

function App() {

  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>


         <div className="App">
      <QuizList />
    </div>


      </div>
    </Router>

   
  );
}

export default App;
