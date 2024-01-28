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
  // Check if the field is a radio button
  const isRadioButton = form_field.props.type === "radio";

  // Determine if the radio button is selected
  const isRadioButtonSelected = isRadioButton && form_field.props.checked;

  // Determine if the user's answer is correct or not
  const isUserAnswerCorrect =
    user_answers &&
    user_answers["que-" + queName[1]] &&
    user_answers["que-" + queName[1]]["is_user_answer_correct"];

  // Conditionally render the badge or raw form field
  if (isRadioButton && !isRadioButtonSelected) {
    return form_field; // Return only the form field for unselected radio buttons
  } else {
    return (
      <Badge
        className="fw-bold p-1 m-1"
        style={{ fontSize: "16px" }}
        bg={
          isUserAnswerCorrect
            ? "success"
            : user_answers
            ? "danger"
            : moduleType.toLowerCase()
        }
      >
        <span className="me-1">{queName[1]}</span>
        {user_answers &&
          (isUserAnswerCorrect ? (
            <FiCheckCircle
              size={18}
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
          ) : (
            <FiXCircle
              size={18}
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
          ))}
        {form_field}
      </Badge>
    );
  }
};

export default QuestionBadge;
