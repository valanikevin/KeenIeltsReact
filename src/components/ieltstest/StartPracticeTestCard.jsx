import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";

const StartPracticeTestCard = () => {
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
