import React from "react";
import HomePage from "./pages/base/HomePage";
import LoginPage from "./pages/base/LoginPage";
import RegisterPage from "./pages/base/RegisterPage";
import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";
import DashboardPage from "./pages/student/DashboardPage";
import TestHomePage from "./pages/ieltstest/TestHomePage";
import AttemptListeningModulePage from "./pages/ieltstest/listening/AttemptListeningModulePage";
import ListeningResultPage from "./pages/ieltstest/listening/ListeningResultPage";
import ModuleHomePage from "./pages/ieltstest/ModuleHomePage";
import AttemptReadingModulePage from "./pages/ieltstest/reading/AttemptReadingModulePage";
import ReadingResultPage from "./pages/ieltstest/reading/ReadingResultPage";
import AttemptWritingModulePage from "./pages/ieltstest/writing/AttemptWritingModulePage";
import WritingResultPage from "./pages/ieltstest/writing/WritingResultPage";

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
          <Route
            path="reading/:module_slug/:attempt_slug/get_result"
            element={<ReadingResultPage />}
          />

          {/* Writing Attempt */}
          <Route
            path="writing/:module_slug/:attempt_slug"
            element={<AttemptWritingModulePage />}
          />

          <Route
            path="writing/:module_slug/:attempt_slug/get_result"
            element={<WritingResultPage />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
