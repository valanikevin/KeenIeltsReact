import React, { useState } from "react";
import { Row, Col, Card, Stack, Button } from "react-bootstrap";
import parse from "html-react-parser";
import { FiPlayCircle } from "react-icons/fi";

const ListeningSection = ({ section, setCurrentSection }) => {
  function handleSetCurrentSection() {
    setCurrentSection(section);
  }
  const [showNotes, setShowNotes] = useState(false);

  function handleShowNotes() {
    setShowNotes(!showNotes);
  }

  return (
    <Col className="my-2" sm={12}>
      <Card>
        <Card.Header>
          <Stack direction="horizontal">
            <div>
              <span className="text-uppercase fw-bold text-black">
                {section.section}
              </span>
              <span
                className="text-black mx-2"
                onClick={handleSetCurrentSection}
              >
                <FiPlayCircle fontSize={20} />
              </span>
            </div>
            <div className="ms-auto">
              <Button
                className="btn btn-sm btn-primary"
                onClick={handleShowNotes}
              >
                Notes
              </Button>
            </div>
          </Stack>
        </Card.Header>
        <Card.Body>
          {showNotes && (
            <textarea
              className="form-control mb-2"
              placeholder="Write your notes here."
              rows={5}
            />
          )}
          <form className="text-black">
            {parse(section.questions, {
              replace: (domNode) => {
                if (domNode.name === "input") {
                  return <input className="m-2" {...domNode.attribs} />;
                }
              },
            })}
          </form>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListeningSection;
