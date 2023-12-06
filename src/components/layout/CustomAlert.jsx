import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Alert as BootstrapAlert, Container } from "react-bootstrap";

const CustomAlert = () => {
  const location = useLocation();
  const useQuery = () => {
    return new URLSearchParams(location.search);
  };

  const query = useQuery();
  const alertMessage = query.get("alert");
  const alertType = query.get("variant");

  const [show, setShow] = useState(alertMessage !== null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

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

  const isValidType = validTypes.includes(alertType) ? alertType : "primary";

  return (
    <>
      {show && alertMessage && (
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
