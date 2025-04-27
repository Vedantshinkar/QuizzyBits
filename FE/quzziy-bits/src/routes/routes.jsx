import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import Login from "../components/Login";
import Signup from "../components/Signup";
import QuizList from "../components/quizList/QuizList";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/quiz" element={<QuizList />} />
    </Routes>
  );
};
