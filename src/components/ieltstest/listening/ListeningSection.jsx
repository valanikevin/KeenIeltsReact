import React, { useState } from "react";
import { Row, Col, Card, Stack, Button, Badge } from "react-bootstrap";
import parse from "html-react-parser";
import { FiPlayCircle } from "react-icons/fi";

const ListeningSection = ({ section, setCurrentSection, handleChange }) => {
  function handleSetCurrentSection() {
    setCurrentSection(section);
  }
  const [showNotes, setShowNotes] = useState(false);

  function handleShowNotes() {
    setShowNotes(!showNotes);
  }

  let counter = 0;

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
          <span className="text-black">
            {parse(section.questions, {
              replace: (domNode) => {
                if (
                  domNode.name === "input" ||
                  domNode.name === "textarea" ||
                  domNode.name === "select"
                ) {
                  counter += 1;
                  let queName = domNode.attribs.name;
                  queName = queName.split("-");
                  return (
                    <>
                      <Badge
                        className="fw-bold"
                        style={{ fontSize: "16px" }}
                        bg="listening"
                      >
                        {queName[1]}
                      </Badge>
                      {React.createElement(domNode.name, {
                        ...domNode.attribs,
                        className: `my-2 mx-1 ${
                          domNode.attribs.className || ""
                        }`,
                        required: false,
                        onChange: handleChange,
                      })}
                    </>
                  );
                }
              },
            })}
          </span>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListeningSection;
