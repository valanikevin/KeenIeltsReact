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

import { FiList, FiArrowRight } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAxios from "../../utils/useAxios";
import AuthContext from "../../context/AuthContext";

const BookCard = ({
  test_type,
  module_type,
  image_url,
  card_title,
  card_description,
  book,
  color,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const api = useAxios();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  let { user, logoutUser } = useContext(AuthContext);

  const getSmartTest = async (specific_test = null) => {
    if (user === null) {
      navigate("/login");
    } else {
      console.log(specific_test);
      var bodyFormData = new FormData();
      bodyFormData.append("specific_test", specific_test);

      const response = await api({
        method: "post",
        url:
          "/ieltstest/find_smart_test/" + module_type + "/" + book.slug + "/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        navigate(
          "/ieltstest/attempt/" +
            response.data.module_type +
            "/" +
            response.data.selected_module +
            "/" +
            response.data.attempt
        );
      }
    }
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
                  <Card.Footer
                    as={Link}
                    key={test.slug}
                    onClick={() => getSmartTest(test.slug)}
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
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="text-dark" style={{ fontSize: "1.0rem" }}>
            {card_title}
          </Card.Title>
          <Card.Text>{card_description}</Card.Text>
        </Card.Body>
        <Card.Footer as={Link}>
          <Stack direction="horizontal" onClick={handleShow} gap={3}>
            <div className="px-2">
              <span className="text-black">Choose {test_type}</span>
            </div>
            <div className="px-2 ms-auto">
              <FiList size={20} className="text-black" />
            </div>
          </Stack>
        </Card.Footer>
        <Card.Footer
          onClick={() => {
            getSmartTest("");
          }}
          as={Link}
        >
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
