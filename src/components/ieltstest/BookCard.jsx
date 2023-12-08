import React, { useState, useEffect, useContext } from "react";
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

import { FiList, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAxios from "../../utils/useAxios";
import AuthContext from "../../context/AuthContext";
import useGetSmartTest from "./GetSmartTest";

const BookCard = ({
  test_type,
  module_slug,
  image_url,
  card_title,
  card_description,
  book,
  color,
  module_data,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const api = useAxios();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  let { user, logoutUser } = useContext(AuthContext);
  const getSmartTest = useGetSmartTest();

  return (
    <>
      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        className="bg-light"
        style={{ zIndex: 9999 }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{card_title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-4">
            <Image width={"100%"} className="rounded" src={image_url} />
          </div>
          {book["tests"] && (
            <>
              <Card className="mb-4">
                <Card.Header className={`bg-${color}`}>
                  <h4 className={`text-white my-0 text-capitalize`}>
                    Choose {module_data[module_slug].title}
                  </h4>
                </Card.Header>

                {book["tests"].map((test) => (
                  <Card.Footer
                    key={test.slug}
                    onClick={() =>
                      getSmartTest(module_slug, book.slug, test.slug)
                    }
                  >
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
        <Link to={"/book/" + book.slug}>
          <Card.Header className="p-0">
            <Card.Img variant="top" src={image_url} />
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-dark" style={{ fontSize: "1.0rem" }}>
              {card_title}
            </Card.Title>
            <Card.Text>{card_description}</Card.Text>
          </Card.Body>

          <Card.Footer className="py-2">
            <Stack direction="horizontal" gap={3}>
              <div className="px-2">
                <span className="text-black text-capitalize">View Book</span>
              </div>
              <div className="px-2 ms-auto">
                <FiArrowUpRight size={20} className="text-black" />
              </div>
            </Stack>
          </Card.Footer>
        </Link>
        <Card.Footer className="py-2">
          <Stack direction="horizontal" onClick={handleShow} gap={3}>
            <div className="px-2">
              <span className="text-black text-capitalize">
                Choose {module_data[module_slug].title}
              </span>
            </div>
            <div className="px-2 ms-auto">
              <FiList size={20} className="text-black" />
            </div>
          </Stack>
        </Card.Footer>
        <Card.Footer
          onClick={() => {
            getSmartTest(module_slug, book.slug, "");
          }}
        >
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <span className={`fw-bold text-${color} text-capitalize`}>
                Begin Smart {module_data[module_slug].title}
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
