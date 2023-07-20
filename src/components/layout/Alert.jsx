import React, { useContext } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { BsXCircleFill } from "react-icons/bs";
import NotificationContext from "../../context/layout/NotificationContext";

const Alert = ({ children, color = "primary" }) => {
  const [notification, setNotification] = useContext(NotificationContext);
  if (notification === null) {
    return null;
  }

  const clearNotification = () => {
    setNotification(null);
  };

  return (
    <Row>
      <Col>
        <div className={`bg-${color} py-2 px-3 text-white`}>
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">{notification}</div>
            <div className="p-2 ms-auto">
              <BsXCircleFill
                onClick={clearNotification}
                size={20}
                fill="#FFF"
              />
            </div>
          </Stack>
        </div>
      </Col>
    </Row>
  );
};

export default Alert;
