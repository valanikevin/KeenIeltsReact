// BaseForm.js

import React, { useContext } from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import { Col, FormGroup, Form, Button } from "react-bootstrap";
import LoadingContext from "../../context/layout/LoadingContext";

const BaseForm = ({
  form_fields = [],
  submit_label = "Submit",
  on_submit,
  serverErrors,
  validation_schema,
}) => {
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);

  // Initialize initialValues with the provided values for each field
  let initialValues = form_fields.reduce((values, field) => {
    values[field.id] =
      field.value || (field.options ? field.options[0].value : "");
    return values;
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setLoadingBar(true);
        try {
          // Call the on_submit function passed in props with form values
          await on_submit(values);
          // If the submission is successful, you can reset the form
          resetForm();
        } catch (error) {
          // Handle any errors here, such as setting error messages in state
          console.error(error);
        }
        setLoadingBar(false);
        setSubmitting(false);
      }}
      validationSchema={validation_schema}
    >
      {({ errors, touched, isValid, dirty }) => (
        <FormikForm>
          {form_fields.map((field) => (
            <FormGroup as={Col} lg={12} md={12} className="mb-3" key={field.id}>
              <Form.Label htmlFor={field.id}>{field.label}</Form.Label>
              {field.type !== "select" ? (
                <Field
                  as={Form.Control}
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  isInvalid={
                    (errors[field.id] && touched[field.id]) ||
                    (serverErrors && serverErrors[field.id])
                  }
                />
              ) : (
                <Field
                  as={Form.Select}
                  name={field.id}
                  className={`form-control ${
                    (errors[field.id] && touched[field.id]) ||
                    (serverErrors && serverErrors[field.id])
                      ? "is-invalid"
                      : ""
                  }`}
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
              )}
              {errors[field.id] && touched[field.id] ? (
                <Form.Control.Feedback type="invalid">
                  {errors[field.id]}
                </Form.Control.Feedback>
              ) : null}
              {serverErrors && serverErrors[field.id] ? (
                <Form.Control.Feedback type="invalid">
                  {serverErrors[field.id].map((sError, index) => (
                    <p key={index}>{sError.message}</p>
                  ))}
                </Form.Control.Feedback>
              ) : null}
            </FormGroup>
          ))}
          <Col lg={12} md={12} className="mb-0 mt-4 gap-2">
            <Button
              variant="primary"
              type="submit"
              disabled={!(isValid && dirty) || loadingBar}
            >
              {submit_label}
            </Button>
          </Col>
        </FormikForm>
      )}
    </Formik>
  );
};

export default BaseForm;
