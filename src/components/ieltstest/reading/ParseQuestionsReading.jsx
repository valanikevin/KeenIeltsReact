import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

const ParseQuestionsReading = ({ section, section_form_values, handleChange }) => {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    if (section_form_values) {
      setFormValues(section_form_values);
    }
  }, [section_form_values]);

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
                  formValues["que-" + queName[1]] === domNode.attribs.value
                }
              />
            ) : domNode.name === "select" ? (
              <select
                {...domNode.attribs}
                className={`my-2 mx-1 ${domNode.attribs.className || ""}`}
                required={false}
                onChange={handleInputChange}
                value={formValues["que-" + queName[1]]}
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
