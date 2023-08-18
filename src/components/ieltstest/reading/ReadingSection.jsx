import React from "react";
import ParseQuestions from "../ParseQuestions";
import ParseQuestionsReading from "./ParseQuestionsReading";

const ReadingSection = ({
  section,
  formRef,
  handleChange = null,
  handleSubmit = null,
  user_answers = null,
}) => {
  return (
    <div className="text-black">
      <form onSubmit={handleSubmit} ref={formRef}>
        <ParseQuestions
          section={section}
          user_answers={user_answers}
          handleChange={handleChange}
          useReadingMode={true}
        />
      </form>
    </div>
  );
};

export default ReadingSection;
