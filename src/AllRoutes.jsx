import React from "react";
import HomePage from "./pages/base/HomePage";
import LoginPage from "./pages/base/LoginPage";
import RegisterPage from "./pages/base/RegisterPage";
import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";
import DashboardPage from "./pages/student/DashboardPage";
import TestHomePage from "./pages/ieltstest/TestHomePage";
import AttemptListeningModulePage from "./pages/ieltstest/AttemptListeningModulePage";
import ListeningResultPage from "./pages/ieltstest/ListeningResultPage";
import ModuleHomePage from "./pages/ieltstest/ModuleHomePage";
import AttemptReadingModulePage from "./pages/ieltstest/AttemptReadingModulePage";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Private Routes */}
      <Route path={"/dashboard"} element={<PrivateRoutes />}>
        <Route index element={<DashboardPage />} />
      </Route>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/register"} element={<RegisterPage />} />

      {/* IELTS Tests */}
      <Route path={"/ieltstest"}>
        <Route index element={<TestHomePage />} />
        <Route path={":module_slug"} element={<ModuleHomePage />} />
        <Route path="attempt" element={<PrivateRoutes />}>
          {/* Listening Attempt */}
          <Route
            path="listening/:module_slug/:attempt_slug"
            element={<AttemptListeningModulePage />}
          />
          <Route
            path="listening/:module_slug/:attempt_slug/get_result"
            element={<ListeningResultPage />}
          />
          {/* Reading Attempt */}
          <Route
            path="reading/:module_slug/:attempt_slug"
            element={<AttemptReadingModulePage />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
