import React from "react";
import { Form } from "react-bootstrap";
import parse from "html-react-parser";

const WritingSection = ({
  currentSection,
  deviceType,
  formRef,
  handleChange,
  currentFormData,
  userAnswerBySection, // Pass this as a prop
}) => {
  return (
    <form className="writing-questions mb-2" ref={formRef}>
      {parse(currentSection.questions)}
      <Form.Control
        as={"textarea"}
        rows={deviceType === "mobile" ? 10 : 30}
        placeholder="Write your answer here"
        name={`task-${currentSection.id}`}
        value={userAnswerBySection[currentSection.id] || ""} // Retrieve the value for the current section
        onChange={handleChange}
      />
    </form>
  );
};

export default WritingSection;
