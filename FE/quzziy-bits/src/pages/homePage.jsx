import {Link} from "react-router-dom";

export function HomePage() {
    return (
      <div className="home">
        <h1 className="title">QuizzyBits</h1>
        <p className="subtitle">Unleash your knowledge with fun quizzes!</p>
        <Link to="/login" className="start-button">Get Started</Link>
      </div>
    );
  }