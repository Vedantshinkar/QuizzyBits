import React, { useEffect, useState } from 'react';

function QuizList() {
    const [quizzes, setQuizzes] = useState([]);
    const [currentQuiz, setCurrentQuiz] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function fetchQuizzes() {
            try {
                const response = await fetch('http://localhost:5000/api/quizzes');
                const data = await response.json();
                setQuizzes(data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }
        }
        fetchQuizzes();
    }, []);

    async function handleAnswer(selectedAnswer) {
        try {
            const response = await fetch(`http://localhost:5000/api/quizzes/${currentQuiz.id}/answer`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ answer: selectedAnswer })
            });

            const result = await response.json();
            if (result.correct) {
                setMessage('✅ Correct Answer! Good job!');
            } else {
                setMessage('❌ Wrong Answer. Try again!');
            }
        } catch (error) {
            console.error('Error submitting answer:', error);
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">🎯 Quiz Learning App</h1>

            {!currentQuiz ? (
                <div>
                    <h2 className="mb-4">Select a Quiz</h2>
                    <ul className="list-group">
                        {quizzes.map(quiz => (
                            <li key={quiz.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {quiz.question}
                                <button className="btn btn-primary" onClick={() => setCurrentQuiz(quiz)}>
                                    Start
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <h2 className="mb-4">{currentQuiz.question}</h2>
                    <div className="d-grid gap-3">
                        {currentQuiz.options.map((option, index) => (
                            <button
                                key={index}
                                className="btn btn-outline-success"
                                onClick={() => handleAnswer(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {message && (
                        <div className="alert alert-info mt-4" role="alert">
                            {message}
                        </div>
                    )}

                    <button
                        className="btn btn-secondary mt-4"
                        onClick={() => {
                            setCurrentQuiz(null);
                            setMessage('');
                        }}
                    >
                        🔙 Back to Quizzes
                    </button>
                </div>
            )}
        </div>
    );
}

export default QuizList;
