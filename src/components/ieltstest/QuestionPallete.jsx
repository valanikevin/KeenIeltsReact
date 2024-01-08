import React from "react";
import { Badge } from "react-bootstrap";

const QuestionPallete = ({ module, currentFormData }) => {
  return (
    <span>
      {Array.from({ length: module.total_questions }, (_, index) => (
        <Badge
          style={{ fontSize: "20px" }}
          key={index}
          className={
            currentFormData["que-" + (index + 1)] !== undefined
              ? currentFormData["que-" + (index + 1)] === ""
                ? "m-1 bg-light text-black"
                : "m-1 bg-secondary"
              : "m-1 bg-light text-black"
          }
          onClick={() => scrollToElement("que-" + (index + 1))}
        >
          {index + 1}
        </Badge>
      ))}
    </span>
  );
};

export default QuestionPallete;
