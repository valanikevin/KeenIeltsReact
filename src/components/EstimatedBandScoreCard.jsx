import React from "react";
import { Card, Table } from "react-bootstrap";

const EstimatedBandScoreCard = ({
  evaluation_keys,
  evaluation,
  currentSection,
}) => {
  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="mt-2 fw-bold">Estimated Band Scores</h3>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>Description</th>
              <th>Bands</th>
            </tr>
          </thead>
          <tbody className="">
            {evaluation_keys.map((item) => (
              <tr key={item.short}>
                <td>
                  <h3 className="m-0 text-black">{item.short}: </h3>
                  {item.name}
                </td>
                <td>
                  <h3>
                    {currentSection
                      ? evaluation &&
                        evaluation[currentSection.id] &&
                        evaluation[currentSection.id][item.key]
                      : evaluation && evaluation[item.key]}
                  </h3>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default EstimatedBandScoreCard;
