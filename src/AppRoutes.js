import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import UserPage from "./pages/UsersPage/UsersPage";

export default function AppRoutes({ catFact }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage catFact={catFact} />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/users" element={<UserPage />} />
    </Routes>
  );
}
