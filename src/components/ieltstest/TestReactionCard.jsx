import React from "react";
import { Card, Row, Col, Stack, Button, Table } from "react-bootstrap";
import { QuestionCircle } from "react-bootstrap-icons";
import { FiInfo } from "react-icons/fi";
import { InlineReactionButtons } from "sharethis-reactjs";

const TestReactionCard = () => {
  return (
    <Card>
      <Card.Header>
        <Stack direction="horizontal" gap={1}>
          <div>
            <h3 className="mt-2 fw-bold"> How was your test?</h3>
          </div>
          <div className="ms-auto">
            <QuestionCircle size={24} className="text-black" />
          </div>
        </Stack>
      </Card.Header>

      <Card.Footer>
        <InlineReactionButtons
          config={{
            alignment: "center", // alignment of buttons (left, center, right)
            enabled: true, // show/hide buttons (true, false)
            language: "en", // which language to use (see LANGUAGES)
            min_count: 0, // hide react counts less than min_count (INTEGER)
            padding: 12, // padding within buttons (INTEGER)
            reactions: [
              // which reactions to include (see REACTIONS)
              "slight_smile",
              "heart_eyes",
              "laughing",
              "astonished",
              "sob",
              "rage",
            ],
            size: 48, // the size of each button (INTEGER)
            spacing: 8, // the spacing between buttons (INTEGER)
            show_total: false,
          }}
        />
      </Card.Footer>
    </Card>
  );
};

export default TestReactionCard;
