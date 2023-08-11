import React from "react";
import { Badge } from "react-bootstrap";

const QuestionPallete = ({ module, currentFormData }) => {
  return (
    <span>
      {Array.from({ length: module.total_questions }, (_, index) => (
        <Badge
          style={{ fontSize: "20px" }}
          key={index}
          className="m-1"
          onClick={() => scrollToElement("que-" + (index + 1))}
          bg={
            currentFormData["que-" + (index + 1)] !== undefined
              ? currentFormData["que-" + (index + 1)] === ""
                ? "warning"
                : "success"
              : "warning"
          }
        >
          {index + 1}
        </Badge>
      ))}
    </span>
  );
};

export default QuestionPallete;
