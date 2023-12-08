import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const WhatsNextCard = () => {
  return (
    <Card>
      <Card.Header>
        <h3 className="mt-2 fw-bold">What's Next?</h3>
      </Card.Header>
      <Card.Body>
        <Button as={Link} to={"/"} className="btn-lg">
          Go to Dashboard
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WhatsNextCard;
