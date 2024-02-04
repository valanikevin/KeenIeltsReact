import React, { lazy, Suspense, useContext, useState } from "react";
import HomePage from "./pages/base/HomePage";
import LoginPage from "./pages/base/LoginPage";
import RegisterPage from "./pages/base/RegisterPage";
import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";
import LoadingPage from "./pages/LoadingPage";
import "../src/assets/scss/_user.scss";

const DashboardPage = lazy(() => import("./pages/student/DashboardPage"));
const AttemptListeningModulePage = lazy(() =>
  import("./pages/ieltstest/listening/AttemptListeningModulePage")
);
const ListeningResultPage = lazy(() =>
  import("./pages/ieltstest/listening/ListeningResultPage")
);
const ModuleHomePage = lazy(() => import("./pages/ieltstest/ModuleHomePage"));
const AttemptReadingModulePage = lazy(() =>
  import("./pages/ieltstest/reading/AttemptReadingModulePage")
);
const ReadingResultPage = lazy(() =>
  import("./pages/ieltstest/reading/ReadingResultPage")
);
const AttemptWritingModulePage = lazy(() =>
  import("./pages/ieltstest/writing/AttemptWritingModulePage")
);
const WritingResultPage = lazy(() =>
  import("./pages/ieltstest/writing/WritingResultPage")
);
const AttemptSpeakingModulePage = lazy(() =>
  import("./pages/ieltstest/speaking/AttemptSpeakingModulePage")
);
const SpeakingResultPage = lazy(() =>
  import("./pages/ieltstest/speaking/SpeakingResultPage")
);
const AccountPage = lazy(() => import("./pages/base/AccountPage"));
const FullTestInfoPage = lazy(() =>
  import("./pages/ieltstest/fulltest/FullTestInfoPage")
);
const VerifyEmailPage = lazy(() => import("./pages/base/VerifyEmailPage"));
const ResetPasswordPage = lazy(() => import("./pages/base/ResetPasswordPage"));
const ConfirmResetPassword = lazy(() =>
  import("./pages/base/ConfirmResetPassword")
);
const BookHomePage = lazy(() => import("./pages/ieltstest/BookHomePage"));
const SpeakingCompletedPage = lazy(() =>
  import("./pages/ieltstest/speaking/SpeakingCompletedPage")
);
const YourTestPage = lazy(() => import("./pages/student/YourTestPage"));

const AllRoutes = () => {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
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
            <Route path="attempt">
              <Route
                path="listening/:module_slug/:attempt_slug/get_result"
                element={<ListeningResultPage />}
              />
              
              <Route
                path="reading/:module_slug/:attempt_slug/get_result"
                element={<ReadingResultPage />}
              />

              <Route
                path="writing/:module_slug/:attempt_slug/get_result"
                element={<WritingResultPage />}
              />

              <Route
                path="speaking/:module_slug/:attempt_slug/get_result"
                element={<SpeakingResultPage />}
              />
            </Route>

            <Route path="attempt" element={<PrivateRoutes />}>
              {/* Full Test */}
              <Route
                path="fulltest/:attempt_slug"
                element={<FullTestInfoPage />}
              />

              {/* Listening Attempt */}
              <Route
                path="listening/:module_slug/:attempt_slug"
                element={<AttemptListeningModulePage />}
              />

              {/* Reading Attempt */}
              <Route
                path="reading/:module_slug/:attempt_slug"
                element={<AttemptReadingModulePage />}
              />

              {/* Writing Attempt */}
              <Route
                path="writing/:module_slug/:attempt_slug"
                element={<AttemptWritingModulePage />}
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
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AllRoutes;
