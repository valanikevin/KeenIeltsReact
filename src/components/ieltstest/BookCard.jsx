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

import { FiList, FiArrowRight } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";

const BookCard = ({
  test_type,
  image_url,
  card_title,
  card_description,
  book,
  color,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const startBookSmartTest = () => {
    const url = "smart_test/book/" + book.slug;
    navigate(url);
  };

  return (
    <>
      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        className="bg-light"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{card_title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-4">
            <Image width={"100%"} className="rounded" src={image_url} />
          </div>
          {book.tests_with_listening_module && (
            <>
              <Card className="mb-4">
                <Card.Header className={`bg-${color}`}>
                  <h4 className={`text-white my-0`}>Choose {test_type}</h4>
                </Card.Header>

                {book.tests_with_listening_module.map((test) => (
                  <Card.Footer key={test.slug}>
                    <Stack direction="horizontal" gap={3}>
                      <div className="">
                        <span className={` text-black`}>{test.name}</span>
                      </div>
                      <div className=" ms-auto">
                        <FiArrowRight size={20} className="text-black" />
                      </div>
                    </Stack>
                  </Card.Footer>
                ))}
              </Card>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <Card className="mb-4">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="text-dark" style={{ fontSize: "1.0rem" }}>
            {card_title}
          </Card.Title>
          <Card.Text>{card_description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Stack direction="horizontal" onClick={handleShow} gap={3}>
            <div className="px-2">
              <span className="text-black">Choose {test_type}</span>
            </div>
            <div className="px-2 ms-auto">
              <FiList size={20} className="text-black" />
            </div>
          </Stack>
        </Card.Footer>
        <Card.Footer onClick={startBookSmartTest}>
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <span className={`fw-bold text-${color}`}>
                Begin Smart {test_type}
              </span>
            </div>
            <div className="p-2 ms-auto">
              <FiArrowRight size={20} className="text-black" />
            </div>
          </Stack>
        </Card.Footer>
      </Card>
    </>
  );
};

export default BookCard;
