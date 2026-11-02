import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Portfolio, {
  HomePage,
  WorkPage,
  AboutPage,
  LearningPage,
  ResumePage,
} from "./portfolio/Portfolio";
import "./portfolio/portfolio.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Portfolio />}>
          <Route index element={<HomePage />} />
          <Route path="project" element={<WorkPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="learning" element={<LearningPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
