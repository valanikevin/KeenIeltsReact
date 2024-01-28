import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import QuestionBadge from "./QuestionBadge";

const ParseQuestions = ({
  section,
  section_form_values,
  user_answers,
  handleChange,
  moduleType = "Listening", // Default to 'Listening' module
}) => {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    if (section_form_values) {
      setFormValues(section_form_values);
    }
  }, [section_form_values]);

  const handleInputChange = (event) => {
    if (moduleType === "Reading") {
      const { name, value } = event.target;
      const key = name.split("-")[1];
      setFormValues({
        ...formValues,
        ["que-" + key]: value,
      });
      if (handleChange) {
        handleChange(event);
      }
    }
  };

  const renderInput = (domNode, queName) => {
    const commonProps = {
      ...domNode.attribs,

      required: false,
      onChange: moduleType === "Reading" ? handleInputChange : handleChange,
      disabled: !!user_answers,
    };

    if (domNode.name === "input" && domNode.attribs.type === "radio") {
      return (
        <input
          type="radio"
          {...commonProps}
          className={`${domNode.attribs.className || ""} custom-form-control`}
          checked={
            user_answers
              ? user_answers["que-" + queName[1]][
                  "user_answer"
                ].toUpperCase() === domNode.attribs.value.toUpperCase()
              : moduleType === "Reading"
              ? formValues["que-" + queName[1]] === domNode.attribs.value
              : undefined
          }
        />
      );
    }

    if (domNode.name === "select") {
      return (
        <>
          <select
            {...commonProps}
            className={`${domNode.attribs.className || ""} custom-form-select`}
            value={
              user_answers
                ? String(
                    user_answers["que-" + queName[1]]["user_answer"]
                  ).toUpperCase() // Convert to lowercase
                : moduleType === "Reading"
                ? String(formValues["que-" + queName[1]]).toUpperCase() // Convert to lowercase
                : undefined
            }
          >
            {Array.from(domNode.children || []).map((optionNode, idx) => {
              const optionValue = optionNode.children[0]
                ? optionNode.children[0].data
                : "";
              return (
                <option
                  {...optionNode.attribs}
                  key={idx}
                  value={String(optionNode.attribs.value).toUpperCase()} // Convert to lowercase
                >
                  {optionValue.toUpperCase()}
                </option>
              );
            })}
          </select>
        </>
      );
    }

    return React.createElement(domNode.name, {
      ...commonProps,
      value: user_answers
        ? user_answers["que-" + queName[1]]["user_answer"]
        : moduleType === "Reading"
        ? formValues["que-" + queName[1]]
        : undefined,
    });
  };

  if (!section || !section.questions) {
    return null;
  }

  return (
    <div className="parser-block">
      {parse(section.questions, {
        replace: (domNode) => {
          if (
            domNode.name === "input" ||
            domNode.name === "textarea" ||
            domNode.name === "select"
          ) {
            let queName = domNode.attribs.name.split("-");

            return (
              <span id={`que-${queName[1]}`} className="">
                {user_answers &&
                  domNode.attribs.type === "radio" &&
                  user_answers["que-" + queName[1]]["user_answer"] ===
                    domNode.attribs.value && (
                    <QuestionBadge
                      user_answers={user_answers}
                      queName={queName}
                      moduleType={moduleType}
                    />
                  )}

                {domNode.attribs.type !== "radio" ? (
                  <QuestionBadge
                    user_answers={user_answers}
                    queName={queName}
                    form_field={renderInput(domNode, queName)}
                    moduleType={moduleType}
                  />
                ) : (
                  <QuestionBadge
                    user_answers={user_answers}
                    queName={queName}
                    form_field={renderInput(domNode, queName)}
                    moduleType={moduleType}
                  />
                )}
              </span>
            );
          }
        },
      })}
    </div>
  );
};

export default ParseQuestions;
