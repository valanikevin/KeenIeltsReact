import React from "react";
import HomePage from "./pages/base/HomePage";
import LoginPage from "./pages/base/LoginPage";
import RegisterPage from "./pages/base/RegisterPage";
import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";
import DashboardPage from "./pages/student/DashboardPage";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Private Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AllRoutes;
