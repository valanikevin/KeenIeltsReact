import React from "react";
import { Badge } from "react-bootstrap";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const QuestionBadge = ({
  children,
  user_answers,
  queName,
  form_field,
  moduleType,
}) => {
  return (
    <Badge
      className="fw-bold p-1 m-1 "
      style={{
        fontSize: "16px",
      }}
      bg={
        user_answers &&
        user_answers["que-" + queName[1]]["is_user_answer_correct"]
          ? "success"
          : user_answers
          ? "danger"
          : moduleType.toLowerCase()
      }
    >
      {queName[1]}
      {user_answers &&
        (user_answers["que-" + queName[1]]["is_user_answer_correct"] ? (
          <FiCheckCircle size={18} style={{ marginLeft: "5px" }} />
        ) : (
          <FiXCircle size={18} style={{ marginLeft: "5px" }} />
        ))}
      <span className=""> {form_field}</span>
    </Badge>
  );
};

export default QuestionBadge;
