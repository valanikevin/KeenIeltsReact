import React from "react";
import ParseQuestions from "../ParseQuestions";

const ReadingSection = ({
  section,
  handleChange = null,
  user_answers = null,
}) => {
  return (
    <div className="text-black">
      <ParseQuestions
        section={section}
        user_answers={user_answers}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ReadingSection;
