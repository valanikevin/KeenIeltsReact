import React, { useState } from "react";
import { Card, Button, ListGroup, Offcanvas } from "react-bootstrap";

const BookCard = ({
  test_type,
  image_url,
  card_title,
  card_description,
  book_tests,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{card_title} Tests</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {book_tests && (
            <ListGroup className="m-2">
              {book_tests.map((test) => (
                <ListGroup.Item key={test.slug}>{test.name}</ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body className="pb-2">
          <Card.Title className="text-dark">{card_title}</Card.Title>
          <Card.Text>{card_description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text>
            <span onClick={handleShow} className="text-primary">
              View {book_tests.length} {test_type}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BookCard;
