import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import useAxios from "../../utils/useAxios";
import { DJANGO_BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const StartPracticeTestCard = () => {
  const api = useAxios();
  const navigate = useNavigate();

  const TakeTestDropdown = [
    {
      menuitem: "Listening",
      link: "/ieltstest/listening/",
      slug: "listening",
    },
    {
      menuitem: "Reading",
      link: "/ieltstest/reading/",
      slug: "reading",
    },
    {
      menuitem: "Writing",
      link: "/ieltstest/writing/",
      slug: "writing",
    },
    {
      menuitem: "Speaking",
      link: "/ieltstest/speaking/",
      slug: "speaking",
    },
  ];

  const isLoggedIn = () => {
    const user = localStorage.getItem("user");
    return user != null; // If user info is in local storage, user is logged in
  };

  async function startTest(item_slug) {
    if (isLoggedIn()) {
      try {
        const response = await api.post(
          `${DJANGO_BASE_URL}/ieltstest/find_smart_test/${item_slug}/`
        );
        navigate(
          `/ieltstest/attempt/${response.data.module_type}/${response.data.selected_module}/${response.data.attempt}`
        );
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error accordingly
      }
    } else {
      navigate(
        "/register/?alert=Please create an free account or login to start practice test.&variant=danger"
      );
    }
  }

  return (
    <Card className="">
      <Card.Header>
        <h3 className="mt-2 fw-bold">Start Practice Test</h3>
      </Card.Header>
      <Card.Body>
        <Row>
          {TakeTestDropdown.map((item, index) => (
            <Col sm={6} key={index}>
              <Button
                key={index}
                onClick={() => startTest(item.slug)}
                className="w-100 my-2"
              >
                {item.menuitem} Test <FiArrowRight size={18} />
              </Button>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default StartPracticeTestCard;
