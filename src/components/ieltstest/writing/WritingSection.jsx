import React from "react";
import { Badge, Form } from "react-bootstrap";
import parse from "html-react-parser";

const WritingSection = ({
  currentSection,
  deviceType,
  formRef,
  handleChange,
  currentFormData,
  userAnswerBySection, // Pass this as a prop
}) => {
  // Function to count the words
  const countWords = (text) => {
    if (!text) return 0;
    return text.trim().split(/\s+/).length;
  };

  // Get the current section's user input
  const currentAnswer = userAnswerBySection[currentSection.id] || "";

  return (
    <>
      <form className="writing-questions mb-2" ref={formRef}>
        {parse(currentSection.questions)}
        <Form.Control
          as={"textarea"}
          rows={deviceType === "mobile" ? 10 : 30}
          placeholder="Write your answer here"
          name={`task-${currentSection.id}`}
          value={currentAnswer}
          onChange={handleChange}
        />
      </form>
      <div style={{ textAlign: "right" }}>
        <Badge className="bg-dark mb-3">
          Word Count: {countWords(currentAnswer)}
        </Badge>
      </div>
    </>
  );
};

export default WritingSection;
