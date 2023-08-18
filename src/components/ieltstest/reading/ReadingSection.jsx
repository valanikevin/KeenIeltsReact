import React from "react";
import ParseQuestions from "../ParseQuestions";
import ParseQuestionsReading from "./ParseQuestionsReading";

const ReadingSection = ({
  section,
  formRef,
  handleChange = null,
  handleSubmit = null,
  section_form_values = null,
}) => {
  return (
    <div className="text-black">
      <form onSubmit={handleSubmit} ref={formRef}>
        <ParseQuestionsReading
          section={section}
          section_form_values={section_form_values}
          handleChange={handleChange}
          useReadingMode={true}
        />
      </form>
    </div>
  );
};

export default ReadingSection;
