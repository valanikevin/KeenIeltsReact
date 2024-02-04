import React from "react";
import { Card, Row, Col, Stack, Button, Table } from "react-bootstrap";
import { FiInfo } from "react-icons/fi";

const UserTestInfoCard = ({ attempt }) => {
  return (
    <Card>
      <Card.Header className="bg-listening py-2 text-white fw-bold">
        Listening Test Result
      </Card.Header>
      <Card.Header>
        <Stack direction="horizontal" gap={1}>
          <div>
            <h3 className="mt-2 fw-bold">{attempt.user_test_info.name}</h3>
          </div>
          <div className="ms-auto">
            <Button variant="outline-primary" size="sm">
              Share
            </Button>
          </div>
        </Stack>
      </Card.Header>
      <div className="table-responsive">
        <Table className="table-striped table-bordered">
          <tbody>
            <tr>
              <td>Test Date</td>
              <td>{attempt.user_test_info.created_at}</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>{attempt.user_test_info.book}</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>{attempt.user_test_info.test}</td>
            </tr>
            <tr>
              <td>Test ID</td>
              <td>{attempt.slug}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Card.Footer>
        <div className="sharethis-inline-share-buttons"></div>
      </Card.Footer>
    </Card>
  );
};

export default UserTestInfoCard;
