import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

const ParseQuestionsReading = ({ section, user_answers, handleChange }) => {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    if (user_answers) {
      setFormValues(user_answers);
    }
  }, [user_answers]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const key = name.split("-")[1];
    setFormValues({
      ...formValues,
      ["que-" + key]: value,
    });
    if (handleChange) {
      handleChange(event);
    }
  };

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
            {domNode.name === "input" && domNode.attribs.type === "radio" ? (
              <input
                type="radio"
                {...domNode.attribs}
                className={`my-2 mx-1 ${domNode.attribs.className || ""}`}
                onChange={handleInputChange}
                required={false}
                checked={
                  user_answers
                    ? user_answers["que-" + queName[1]]["user_answer"] ===
                      domNode.attribs.value
                    : formValues["que-" + queName[1]] === domNode.attribs.value
                }
                disabled={!!user_answers}
              />
            ) : domNode.name === "select" ? (
              <select
                {...domNode.attribs}
                className={`my-2 mx-1 ${domNode.attribs.className || ""}`}
                required={false}
                onChange={handleInputChange}
                value={
                  user_answers
                    ? user_answers["que-" + queName[1]]["user_answer"]
                    : formValues["que-" + queName[1]]
                }
                disabled={!!user_answers}
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
                onChange: handleInputChange,
                value: formValues["que-" + queName[1]],
              })
            )}
          </span>
        );
      }
    },
  });
};

export default ParseQuestionsReading;
