import React, { useState } from "react";
import {
  Card,
  Button,
  ListGroup,
  Offcanvas,
  Image,
  Row,
  Col,
  Stack,
  Badge,
} from "react-bootstrap";

import { BsArrowRight } from "react-icons/bs";

const BookCard = ({
  test_type,
  image_url,
  card_title,
  card_description,
  book_tests,
  color,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        className="bg-white"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{card_title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-5">
            <Image width={"100%"} className="rounded" src={image_url} />
          </div>
          {book_tests && (
            <>
              <h4 className=" my-3 text-center">Choose {test_type}</h4>
              <ListGroup className="rounded-0 ">
                {book_tests.map((test) => (
                  <ListGroup.Item key={test.slug} className="text-black">
                    <Stack direction="horizontal" gap={3}>
                      <div className="p-2">{test.name}</div>
                      <div className="p-2 ms-auto">
                        <Badge bg="listening">
                          <BsArrowRight size={20} fill="#fff" />
                        </Badge>
                      </div>
                    </Stack>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="text-dark">{card_title}</Card.Title>
          <Card.Text>{card_description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text>
            <span onClick={handleShow} className="text-primary">
              Choose {test_type}
            </span>
          </Card.Text>
        </Card.Footer>
      </Card>
    </>
  );
};

export default BookCard;
