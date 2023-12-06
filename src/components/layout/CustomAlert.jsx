import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { Alert as BootstrapAlert, Container } from "react-bootstrap"; // Import Alert from react-bootstrap

const CustomAlert = () => {
  // Use useLocation to get the current location object
  const location = useLocation();

  // A function to parse the query string
  const useQuery = () => {
    return new URLSearchParams(location.search);
  };

  const query = useQuery();

  // Get the 'alert' and 'type' parameter from the URL
  const alertMessage = query.get("alert");
  const alertType = query.get("variant");

  // List of allowed alert types
  const validTypes = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  // Check if the alertType is valid
  const isValidType = validTypes.includes(alertType) ? alertType : "primary";

  // Conditionally render the Bootstrap alert
  return (
    <>
      {alertMessage && (
        <div className={`bg-${isValidType}`}>
          <Container>
            <div className="text-white text-center py-3">
              <span style={{ fontSize: "16px" }}> {alertMessage}</span>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default CustomAlert;
