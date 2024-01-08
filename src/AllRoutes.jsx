import React from "react";
import HomePage from "./pages/base/HomePage";
import LoginPage from "./pages/base/LoginPage";
import RegisterPage from "./pages/base/RegisterPage";
import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";
import DashboardPage from "./pages/student/DashboardPage";

import AttemptListeningModulePage from "./pages/ieltstest/listening/AttemptListeningModulePage";
import ListeningResultPage from "./pages/ieltstest/listening/ListeningResultPage";
import ModuleHomePage from "./pages/ieltstest/ModuleHomePage";
import AttemptReadingModulePage from "./pages/ieltstest/reading/AttemptReadingModulePage";
import ReadingResultPage from "./pages/ieltstest/reading/ReadingResultPage";
import AttemptWritingModulePage from "./pages/ieltstest/writing/AttemptWritingModulePage";
import WritingResultPage from "./pages/ieltstest/writing/WritingResultPage";
import AttemptSpeakingModulePage from "./pages/ieltstest/speaking/AttemptSpeakingModulePage";
import SpeakingResultPage from "./pages/ieltstest/speaking/SpeakingResultPage";
import AccountPage from "./pages/base/AccountPage";
import FullTestInfoPage from "./pages/ieltstest/fulltest/FullTestInfoPage";
import VerifyEmailPage from "./pages/base/VerifyEmailPage";
import ResetPasswordPage from "./pages/base/ResetPasswordPage";
import ConfirmResetPassword from "./pages/base/ConfirmResetPassword";
import BookHomePage from "./pages/ieltstest/BookHomePage";
import SpeakingCompletedPage from "./pages/ieltstest/speaking/SpeakingCompletedPage";
import YourTestPage from "./pages/student/YourTestPage";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Private Routes */}
      <Route path={"/dashboard"} element={<PrivateRoutes />}>
        <Route index element={<DashboardPage />} />
        <Route path={"/dashboard/tests"} element={<YourTestPage />} />
      </Route>

      <Route path={"/account"} element={<PrivateRoutes />}>
        <Route index element={<AccountPage />} />
      </Route>

      <Route path={"/"} element={<HomePage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/register"} element={<RegisterPage />} />
      <Route path={"/verify"} element={<VerifyEmailPage />} />
      <Route path={"/reset"} element={<ResetPasswordPage />} />
      <Route path={"/reset/confirm/"} element={<ConfirmResetPassword />} />
      <Route path={"book/:book_slug"} element={<BookHomePage />} />

      {/* IELTS Tests */}
      <Route path={"/ieltstest"}>
        <Route path={":module_slug"} element={<ModuleHomePage />} />
        <Route path="attempt" element={<PrivateRoutes />}>
          {/* Full Test */}
          <Route path="fulltest/:attempt_slug" element={<FullTestInfoPage />} />

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

          {/* Speaking Attempt */}
          <Route
            path="speaking/:module_slug/:attempt_slug"
            element={<AttemptSpeakingModulePage />}
          />

          <Route
            path="speaking/:module_slug/:attempt_slug/completed"
            element={<SpeakingCompletedPage />}
          />

          <Route
            path="speaking/:module_slug/:attempt_slug/get_result"
            element={<SpeakingResultPage />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
