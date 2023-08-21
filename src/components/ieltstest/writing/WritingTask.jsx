import React from "react";
import parse from "html-react-parser";

const WritingTask = ({ currentSection }) => {
  return <div> {parse(currentSection.task)}</div>;
};

export default WritingTask;
