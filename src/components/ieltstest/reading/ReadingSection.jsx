import React from "react";
import ParseQuestions from "../ParseQuestions";

const ReadingSection = ({
  section,
  formRef,
  handleChange = null,
  handleSubmit = null,
  section_form_values = null,
  user_answers = null,
}) => {
  return (
    <div className="text-black">
      <form onSubmit={handleSubmit} ref={formRef}>
        <ParseQuestions
          section={section}
          section_form_values={section_form_values}
          handleChange={handleChange}
          moduleType={"Reading"}
          user_answers={user_answers}
        />
      </form>
    </div>
  );
};

export default ReadingSection;
