import React from "react";
import { Card, Row, Col, Stack, Button, Table } from "react-bootstrap";
import { FiCheckCircle, FiInfo } from "react-icons/fi";
import { InlineShareButtons } from "sharethis-reactjs";

const UserTestInfoCard = ({ attempt, module_type }) => {
  return (
    <Card>
      <Card.Header
        className={`bg-${module_type} py-2 text-white fw-bold text-capitalize`}
      >
        {module_type} Test Result
      </Card.Header>
      <Card.Header>
        <Stack direction="horizontal" gap={1}>
          <div>
            <h3 className="mt-2 fw-bold">{attempt.user_test_info.name}</h3>
          </div>
          <div className="ms-auto">
            <FiCheckCircle size={24} className="text-black" />
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
        <InlineShareButtons
          config={{
            alignment: "center", // alignment of buttons (left, center, right)
            color: "social", // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)

            labels: "cta", // button labels (cta, counts, null)
            language: "en", // which language to use (see LANGUAGES)
            networks: [
              // which networks to include (see SHARING NETWORKS)
              "whatsapp",
              "facebook",
              "messenger",
              "telegram",
              "sharethis",
            ],
            padding: 12, // padding within buttons (INTEGER)
            radius: 4, // the corner radius on each button (INTEGER)
            show_total: false,
            size: 40, // the size of each button (INTEGER)
          }}
        />
      </Card.Footer>
    </Card>
  );
};

export default UserTestInfoCard;
