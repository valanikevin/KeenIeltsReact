import React from "react";
import { Card, Stack, Button } from "react-bootstrap";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const SectionCard = ({
  currentSection,
  deviceType,
  isFirstSection,
  isLastSection,
  handlePreviousSectionButton,
  handleNextSectionButton,
}) => {
  return (
    <Card>
      <Card.Body>
        <Stack direction="horizontal">
          <div>
            <Button
              variant="primary"
              onClick={handlePreviousSectionButton}
              disabled={isFirstSection}
            >
              <FiArrowLeft size={20} />{" "}
              {deviceType === "desktop" && "Previous "}
            </Button>
          </div>
          <div className="ms-auto">
            <span className="fw-bold text-black" style={{ fontSize: "20px" }}>
              {currentSection.section}
            </span>
          </div>
          <div className="ms-auto">
            <Button
              variant="primary"
              onClick={handleNextSectionButton}
              disabled={isLastSection}
            >
              {deviceType === "desktop" && "Next "}
              <FiArrowRight size={20} />
            </Button>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default SectionCard;
