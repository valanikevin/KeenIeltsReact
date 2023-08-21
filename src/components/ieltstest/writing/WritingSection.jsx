import React from "react";
import { Form } from "react-bootstrap";
import parse from "html-react-parser";

const WritingSection = ({
  currentSection,
  deviceType,
  formRef,
  handleChange,
}) => {
  return (
    <form
      className="writing-questions mb-2"
      ref={formRef}
      onChange={handleChange}
    >
      {parse(currentSection.questions)}
      <Form.Control
        as={"textarea"}
        rows={deviceType === "mobile" ? 10 : 30}
        placeholder="Write your answer here"
        name={`task-${currentSection.id}`}
      />
    </form>
  );
};

export default WritingSection;
