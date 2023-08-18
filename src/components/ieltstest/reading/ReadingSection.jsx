import React from "react";
import ParseQuestions from "../ParseQuestions";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ReadingSection = ({
  section,
  formRef,
  handleChange = null,
  handleSubmit = null,
  section_form_values = null,
  user_answers = null,
}) => {
  return (
    <Row className="text-black">
      <Col className="col-12">
        <form onSubmit={handleSubmit} ref={formRef}>
          <ParseQuestions
            section={section}
            section_form_values={section_form_values}
            handleChange={handleChange}
            moduleType={"Reading"}
            user_answers={user_answers}
          />
        </form>
      </Col>
      
    </Row>
  );
};

export default ReadingSection;
