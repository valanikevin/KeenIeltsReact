import React from "react";
import { Card, Table, Badge } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const YourRecentTestsCard = ({ tests }) => {
  return (
    <>
      {tests && tests.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Date</th>
              <th>Status</th>
              <th>Bands</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test, index) => (
              <tr key={index}>
                {/* Added key for list rendering */}
                <td>
                  <Badge bg={test.module} className="text-capitalize">
                    {test.module.charAt(0).toUpperCase()}
                  </Badge>
                </td>
                <td>
                  {test.book_name} - {test.test_name}
                </td>
                <td>{test.updated_at}</td>
                <td>
                  {test.status === "Evaluated" || test.status === "Ready" ? (
                    <CheckCircleFill size={20} className="text-success" />
                  ) : (
                    test.status === "Completed" && (
                      <CheckCircleFill size={20} className="text-warning" />
                    )
                  )}
                </td>

                <td>{test.score}</td>
                <td>
                  {test.status === "Evaluated" || test.status === "Ready" ? (
                    <a
                      href={
                        "/ieltstest/attempt/" +
                        test.module +
                        "/" +
                        test.module_slug +
                        "/" +
                        test.attempt_slug +
                        "/get_result"
                      }
                    >
                      Result
                      <FiArrowRight />
                    </a>
                  ) : (
                    <Link
                      to={
                        "/ieltstest/attempt/" +
                        test.module +
                        "/" +
                        test.module_slug +
                        "/" +
                        test.attempt_slug +
                        "/completed"
                      }
                    >
                      Attempt
                      <FiArrowRight />
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h3 className="text-center my-6">
          You haven't attempted any tests from this book yet.
        </h3>
      )}
    </>
  );
};

export default YourRecentTestsCard;
