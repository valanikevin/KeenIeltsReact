import React from "react";
import { Card, Table } from "react-bootstrap";

const SuggestionListCard = ({ title, array }) => {
  return (
    <Card>
      <Card.Header>
        <h3 className="mt-2 fw-bold">{title}</h3>
      </Card.Header>
      <Card.Body>
        <Table bordered hover responsive>
          <tbody className="">
            {array.map((suggestion, index) => (
              <tr key={index}>
                <td>
                  <p style={{ fontSize: "1.1rem" }}>{suggestion}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default SuggestionListCard;
