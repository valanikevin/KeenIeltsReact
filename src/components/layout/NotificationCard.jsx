import React from "react";
import { Badge, Card, Stack, Button } from "react-bootstrap";
import { FiArrowRight, FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";

const NotificationCard = ({ title, button_title, button_url }) => {
  return (
    <Card className="mb-3 ">
      <Card.Header>
        <Stack direction="horizontal" gap={2}>
          <div>
            <h3 className="mt-2 fw-bold">Notifications</h3>
          </div>

          <Badge pill bg="primary ms-auto">
            <FiBell size={25} className="" />
          </Badge>
        </Stack>
      </Card.Header>
      <Card.Body>
        <h3 className="m-0">{title}</h3>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" className="ms-auto" as={Link} to={button_url}>
          {button_title} <FiArrowRight size={20} />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default NotificationCard;
