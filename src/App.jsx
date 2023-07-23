import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/base/HomePage";
import LoginPage from "./pages/base/LoginPage";
import RegisterPage from "./pages/base/RegisterPage";
import Header from "./components/layout/Header";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";
import { Container } from "react-bootstrap";
import { createContext, useState } from "react";
import NotificationState from "./context/layout/NotificationState";
import AppNavbar from "./components/layout/navbar/AppNavbar";
import LoadingBar from "./components/layout/LoadingBar/LoadingBar";
import LoadingState from "./context/layout/LoadingState";
export const ErrorContext = createContext();

function App() {
  return (
    <>
      <NotificationState>
        <LoadingState>
          <AuthProvider>
            <AppNavbar />
            <LoadingBar />
            <Container className="p-3">
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path="/" element={<HomePage />} />
                </Route>

                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </Container>
          </AuthProvider>
        </LoadingState>
      </NotificationState>
    </>
  );
}

export default App;
