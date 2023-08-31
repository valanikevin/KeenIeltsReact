import "./App.css";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { createContext } from "react";
import NotificationState from "./context/layout/NotificationState";
import AppNavbar from "./components/layout/navbar/AppNavbar";
import LoadingBar from "./components/layout/LoadingBar/LoadingBar";
import LoadingState from "./context/layout/LoadingState";
import Footer from "./components/layout/Footer";
import AllRoutes from "./AllRoutes";
import ScrollToTop from "./utils/ScrollToTop";
export const ErrorContext = createContext();

function App() {
  const compose = (providers) =>
    providers.reduce((Prev, Curr) => ({ children }) => (
      <Prev>
        <Curr>{children}</Curr>
      </Prev>
    ));

  const location = useLocation();

  // Define a pattern that matches the route where you don't want the Navbar and Footer
  const hideLayoutForPattern =
    /^\/ieltstest\/attempt\/(reading|writing|speaking)\/[A-Za-z0-9]+\/[A-Za-z0-9]+$/;
  // const hideLayoutForPattern = /^\/ieltstest\/attempt\/reading\/.*/;

  const hideNavFooter = hideLayoutForPattern.test(location.pathname);

  const GlobalProvider = compose([
    NotificationState,
    LoadingState,
    AuthProvider,
  ]);

  return (
    <>
      <GlobalProvider>
        <ScrollToTop />
        {/* Website Layout */}
        {!hideNavFooter && <AppNavbar />}
        <LoadingBar />
        <div className="app">
          <AllRoutes />
        </div>

        {!hideNavFooter && <Footer />}
        {/* Website Layout Ends */}
      </GlobalProvider>
    </>
  );
}

export default App;
