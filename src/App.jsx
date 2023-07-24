import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";
import { Container } from "react-bootstrap";
import { createContext, useState } from "react";
import NotificationState from "./context/layout/NotificationState";
import AppNavbar from "./components/layout/navbar/AppNavbar";
import LoadingBar from "./components/layout/LoadingBar/LoadingBar";
import LoadingState from "./context/layout/LoadingState";
import Footer from "./components/layout/Footer";
import AllRoutes from "./AllRoutes";
export const ErrorContext = createContext();

function App() {
  const compose = (providers) =>
    providers.reduce((Prev, Curr) => ({ children }) => (
      <Prev>
        <Curr>{children}</Curr>
      </Prev>
    ));

  const GlobalProvider = compose([
    NotificationState,
    LoadingState,
    AuthProvider,
  ]);

  return (
    <>
      <GlobalProvider>
        {/* Website Layout */}
        <AppNavbar />
        <LoadingBar />
        <Container className="p-3 app">
          {/* All Routes */}
          <AllRoutes />
        </Container>
        <Footer />
        {/* Website Layout Ends */}
      </GlobalProvider>
    </>
  );
}

export default App;
