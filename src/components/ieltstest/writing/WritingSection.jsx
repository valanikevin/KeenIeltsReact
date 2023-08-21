import React from "react";
import { Form } from "react-bootstrap";

const WritingSection = () => {
  return (
    <div>
      <Form.Control
        as={"textarea"}
        rows={10}
        placeholder="Write your answer here"
      />
    </div>
  );
};

export default WritingSection;
