import React from "react";
import HomePage from "./pages/base/HomePage";
import LoginPage from "./pages/base/LoginPage";
import RegisterPage from "./pages/base/RegisterPage";
import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";
import DashboardPage from "./pages/student/DashboardPage";
import ListeningHomePage from "./pages/ieltstest/ListeningHomePage";
import TestHomePage from "./pages/ieltstest/TestHomePage";

import { FRONTEND_URLS } from "./utils/urls";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Private Routes */}
      <Route path={FRONTEND_URLS.dashboard} element={<PrivateRoutes />}>
        <Route index element={<DashboardPage />} />
      </Route>
      <Route path={FRONTEND_URLS.home} element={<HomePage />} />
      <Route path={FRONTEND_URLS.login} element={<LoginPage />} />
      <Route path={FRONTEND_URLS.register} element={<RegisterPage />} />

      {/* IELTS Tests */}
      <Route path={FRONTEND_URLS.ieltstest_home}>
        <Route index element={<TestHomePage />} />
        <Route
          path={FRONTEND_URLS.listening_module_home}
          element={<ListeningHomePage />}
        />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
