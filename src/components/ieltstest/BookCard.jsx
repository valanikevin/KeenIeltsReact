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

  const getSmartTest = async (specific_test = null) => {
    if (user === null) {
      navigate(
        "/register/?alert=Please create an free account or login to start practice test."
      );
    } else {
      var bodyFormData = new FormData();
      bodyFormData.append("specific_test", specific_test);

      const response = await api({
        method: "post",
        url:
          "/ieltstest/find_smart_test/" + module_slug + "/" + book.slug + "/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        if (module_slug === "fulltest") {
          navigate("/ieltstest/attempt/fulltest/" + response.data.attempt);
        } else {
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
    }
  };

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
        <Card.Footer>
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
            getSmartTest("");
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
