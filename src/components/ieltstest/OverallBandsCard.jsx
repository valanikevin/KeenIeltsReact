import React from "react";
import { Card, Badge } from "react-bootstrap";

const OverallBandsCard = ({ bands, description, color = "primary" }) => {
  return (
    <Card>
      <Card.Header>
        <h3 className="mt-2 fw-bold">Overall Score</h3>
      </Card.Header>
      <Card.Body className="">
        <Badge bg={color}>
          <h4 className="display-5 mt-2 mx-3 text-white">{bands} Bands</h4>
        </Badge>
        <p style={{ fontSize: "1.1rem" }} className="mt-4">
          {description}
        </p>
      </Card.Body>
    </Card>
  );
};

export default OverallBandsCard;
