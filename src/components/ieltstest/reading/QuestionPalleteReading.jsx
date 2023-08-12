import React from "react";
import { Badge } from "react-bootstrap";

const QuestionPalleteReading = ({ module, userAnswersBySection }) => {
  return (
    <span>
      {/* Iterate over the keys of userAnswersBySection */}
      {Object.keys(userAnswersBySection).map((section) => (
        <div key={section} className="mb-3">
          <p className="my-0 mx-1 text-black">Section {section}</p>
          {/* Iterate over the keys of the corresponding value */}
          {Object.keys(userAnswersBySection[section]).map((item, index) => (
            // You can access the value with userAnswersBySection[section][item]
            <Badge
              style={{ fontSize: "20px" }}
              key={`${section}-${index}`}
              className="m-1"
              bg={
                userAnswersBySection[section][item] !== undefined &&
                userAnswersBySection[section][item] !== ""
                  ? "success"
                  : "warning"
              }
            >
              {item.split("-")[1]}
            </Badge>
          ))}
        </div>
      ))}
    </span>
  );
};

export default QuestionPalleteReading;
