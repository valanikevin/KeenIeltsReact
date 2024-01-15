import React from "react";
import axios from "axios"; // Import Axios
import { DJANGO_BASE_URL } from "../utils/config";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  reportMistake = async (
    values,
    handleSuccess,
    handleCloseReportMistakeModal,
    setError
  ) => {
    try {
      // Fetch the current URL
      const currentUrl = window.location.href;

      // Add the current URL to your values object
      const dataToSend = {
        ...values,
        currentUrl: currentUrl,
        issueType: "System Error",
      };

      // Post request with the updated data
      const response = await axios.post(
        DJANGO_BASE_URL + "/base/report_mistake/",
        dataToSend
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.response.data.message);
    }
  };

  componentDidCatch(error, errorInfo) {
    // Log the error to the console and report the mistake
    console.error("Uncaught error:", error, errorInfo);
    this.reportMistake(
      { issueDescription: error.toString(), errorInfo },
      () => {},
      () => {},
      (msg) => console.error(msg)
    );
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
