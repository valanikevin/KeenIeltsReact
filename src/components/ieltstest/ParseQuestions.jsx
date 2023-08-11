import React, { useState } from "react";
import parse from "html-react-parser";
import QuestionBadge from "./QuestionBadge";

const ParseQuestions = ({ section, user_answers, handleChange }) => {
  let counter = 0;
  if (!section || !section.questions) {
    return null;
  }
  return parse(section.questions, {
    replace: (domNode) => {
      if (
        domNode.name === "input" ||
        domNode.name === "textarea" ||
        domNode.name === "select"
      ) {
        counter += 1;
        let queName = domNode.attribs.name.split("-");

        return (
          <span id={`que-${queName[1]}`}>
            {user_answers &&
              domNode.attribs.type === "radio" &&
              user_answers["que-" + queName[1]]["user_answer"] ===
                domNode.attribs.value && (
                <QuestionBadge user_answers={user_answers} queName={queName} />
              )}

            {domNode.attribs.type !== "radio" && (
              <QuestionBadge user_answers={user_answers} queName={queName} />
            )}

            {domNode.name === "input" && domNode.attribs.type === "radio" ? (
              <input
                type="radio"
                {...domNode.attribs}
                className={`my-2 mx-1 ${domNode.attribs.className || ""}`}
                onChange={handleChange}
                disabled={!!user_answers}
                required={false}
                checked={
                  user_answers
                    ? user_answers["que-" + queName[1]]["user_answer"] ===
                      domNode.attribs.value
                    : undefined
                }
              />
            ) : domNode.name === "select" ? (
              <select
                {...domNode.attribs}
                className={`my-2 mx-1 ${domNode.attribs.className || ""}`}
                required={false}
                onChange={handleChange}
                disabled={!!user_answers}
                value={
                  user_answers
                    ? user_answers["que-" + queName[1]]["user_answer"]
                    : undefined
                }
              >
                {Array.from(domNode.children || []).map((optionNode, idx) => (
                  <option
                    key={idx}
                    value={optionNode.attribs.value}
                    {...optionNode.attribs}
                  >
                    {optionNode.children[0].data}
                  </option>
                ))}
              </select>
            ) : (
              React.createElement(domNode.name, {
                ...domNode.attribs,
                className: `my-2 mx-1 ${domNode.attribs.className || ""}`,
                required: false,
                onChange: handleChange,
                disabled: !!user_answers,
                value: user_answers
                  ? user_answers["que-" + queName[1]]["user_answer"]
                  : undefined,
              })
            )}
          </span>
        );
      }
    },
  });
};

export default ParseQuestions;
