const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Sample in-memory data 
let quizzes = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
},
{
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
},
{
    id: 3,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Wordsworth", "William Shakespeare", "Charles Dickens", "Mark Twain"],
    correctAnswer: "William Shakespeare"
},
{
    id: 4,
    question: "What is the chemical symbol for Gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    correctAnswer: "Au"
},
{
    id: 5,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7"
},
{
    id: 6,
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Leopard"],
    correctAnswer: "Lion"
},
{
    id: 7,
    question: "What is the boiling point of water at sea level in Celsius?",
    options: ["90°C", "95°C", "100°C", "105°C"],
    correctAnswer: "100°C"
},
{
    id: 8,
    question: "Who was the first person to walk on the moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
    correctAnswer: "Neil Armstrong"
},
{
    id: 9,
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    correctAnswer: "Carbon Dioxide"
},
{
    id: 10,
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean"
},
{
    id: 11,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "India"],
    correctAnswer: "Japan"
},
{
    id: 12,
    question: "In computing, what does CPU stand for?",
    options: ["Central Performance Unit", "Central Processing Unit", "Control Processing Unit", "Computer Personal Unit"],
    correctAnswer: "Central Processing Unit"
},
{
    id: 13,
    question: "What is H2O commonly known as?",
    options: ["Oxygen", "Water", "Hydrogen", "Salt"],
    correctAnswer: "Water"
},
{
    id: 14,
    question: "Which language is used to create Android Apps?",
    options: ["Python", "Java", "Swift", "C++"],
    correctAnswer: "Java"
},
{
    id: 15,
    question: "Which country invented paper?",
    options: ["Greece", "China", "Egypt", "India"],
    correctAnswer: "China"
},
{
    id: 16,
    question: "Which part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    correctAnswer: "Leaf"
},
{
    id: 17,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: "Diamond"
},
{
    id: 18,
    question: "Which is the longest river in the world?",
    options: ["Amazon River", "Yangtze River", "Mississippi River", "Nile River"],
    correctAnswer: "Nile River"
},
{
    id: 19,
    question: "Which instrument measures atmospheric pressure?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
    correctAnswer: "Barometer"
},
{
    id: 20,
    question: "Which vitamin is produced when a person is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correctAnswer: "Vitamin D"
}

];

// Routes

// Home route
app.get('/', (req, res) => {
    res.send('Quiz Backend is running!');
});

// Get all quizzes
app.get('/api/quizzes', (req, res) => {
    res.json(quizzes);
});

// Get a single quiz by ID
app.get('/api/quizzes/:id', (req, res) => {
    const quizId = parseInt(req.params.id);
    const quiz = quizzes.find(q => q.id === quizId);
    if (quiz) {
        res.json(quiz);
    } else {
        res.status(404).json({ message: 'Quiz not found' });
    }
});

// Submit an answer to a quiz
app.post('/api/quizzes/:id/answer', (req, res) => {
    const quizId = parseInt(req.params.id);
    const { answer } = req.body;

    const quiz = quizzes.find(q => q.id === quizId);

    if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
    }

    const isCorrect = quiz.correctAnswer === answer;
    res.json({ correct: isCorrect });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});