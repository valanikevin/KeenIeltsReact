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

export const ErrorContext = createContext();

function App() {
  const [error, setError] = useState(null);

  return (
    <>
      <AuthProvider>
        <ErrorContext.Provider value={[error, setError]}>
          <Header />
          <h3>Error: {error}</h3>
          <Container>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<HomePage />} />
              </Route>

              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Container>
        </ErrorContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
