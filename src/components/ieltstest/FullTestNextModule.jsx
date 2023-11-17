import React from "react";
import { Card } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";

const FullTestNextModule = ({ attempt }) => {
  if (!attempt || !attempt.full_test_attempt_slug) {
    return null;
  }

  return (
    <>
      {attempt.full_test_next_attempt ? (
        <Card>
          <Card.Header>
            <h3 className="mt-2 fw-bold">Next Test</h3>
          </Card.Header>
          <Card.Body>
            <p
              style={{ fontSize: "1.3rem", textTransform: "capitalize" }}
              className="fw-bold capitalize"
            >
              {attempt.full_test_next_attempt.module_type || ""}
            </p>
            <a
              href={
                "/ieltstest/attempt/" +
                attempt.full_test_next_attempt.module_type +
                "/" +
                attempt.full_test_next_attempt.module_slug +
                "/" +
                attempt.full_test_next_attempt.attempt_slug
              }
              className="btn btn-primary"
              style={{ textTransform: "capitalize" }}
            >
              Start {attempt.full_test_next_attempt.module_type || ""} Test
              <FiArrowRight className="ms-3" size={20} />
            </a>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Header>
            <h3 className="mt-2 fw-bold">Full Test Results</h3>
          </Card.Header>
          <Card.Body>
            <p
              style={{ fontSize: "1.3rem", textTransform: "capitalize" }}
              className="fw-bold capitalize "
            ></p>
            <a
              href={
                "/ieltstest/attempt/fulltest/" + attempt.full_test_attempt_slug
              }
              className="btn btn-primary"
              style={{ textTransform: "capitalize" }}
            >
              View Full Test Results
              <FiArrowRight className="ms-3" size={20} />
            </a>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default FullTestNextModule;
