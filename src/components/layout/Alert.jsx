import React, { useContext } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { BsXCircleFill } from "react-icons/bs";
import NotificationContext from "../../context/layout/NotificationContext";

const Alert = () => {
  const [notification, setNotification] = useContext(NotificationContext);
  if (notification.message === "") {
    return null;
  }

  const clearNotification = () => {
    setNotification({ ...notification, message: "" });
  };

  return (
    <Row>
      <Col>
        <div
          className={`bg-${notification.color} py-2 px-3 text-white`}
          style={{ fontSize: "15px" }}
        >
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">{notification.message}</div>
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
