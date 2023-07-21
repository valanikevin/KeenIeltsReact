import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/layout/Header";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";
import { Container } from "react-bootstrap";
import { createContext, useState } from "react";
import NotificationState from "./context/layout/NotificationState";

export const ErrorContext = createContext();

function App() {
  return (
    <>
      <NotificationState>
        <AuthProvider>
          <Header />
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
      </NotificationState>
    </>
  );
}

export default App;
