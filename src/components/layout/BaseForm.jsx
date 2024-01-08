import React, { useContext, useState } from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import { Col, FormGroup, Form, Button, Alert } from "react-bootstrap";
import LoadingContext from "../../context/layout/LoadingContext";
import parse from "html-react-parser";

const BaseForm = ({
  form_fields = [],
  submit_label = "Submit",
  on_submit,
  serverErrors,
  validation_schema,
  nonFieldErrors,
  successMessage = "Form submitted successfully!",
  resetForm = false,
  showSuccessMessage = true,
}) => {
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  let initialValues = form_fields.reduce((values, field) => {
    values[field.id] =
      field.value || (field.options ? field.options[0].value : "");
    return values;
  }, {});

  const handleSuccess = (formikReset) => {
    if (resetForm) {
      formikReset();
    }

    if (showSuccessMessage) {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        // Check if resetForm prop is true and reset the form
      }, 5000);
    }
  };

  return (
    <>
      {nonFieldErrors && (
        <Alert variant="danger">{parse(nonFieldErrors)}</Alert>
      )}
      {serverErrors && serverErrors.non_field_errors && (
        <Alert variant="danger">
          {serverErrors.non_field_errors.join(" ")}
        </Alert>
      )}
      {showSuccessAlert && (
        <Alert
          variant="success"
          onClose={() => setShowSuccessAlert(false)}
          dismissible
        >
          {successMessage}
        </Alert>
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting, resetForm: formikReset }) => {
          setLoadingBar(true);
          try {
            await on_submit(values, () => handleSuccess(formikReset));
          } catch (error) {
            console.error(error);
          } finally {
            setSubmitting(false);
          }
        }}
        validationSchema={validation_schema}
        enableReinitialize
      >
        {({ errors, touched, isValid, dirty }) => (
          <FormikForm>
            {form_fields.map((field) => (
              <FormGroup
                as={Col}
                lg={12}
                md={12}
                className="mb-3"
                key={field.id}
              >
                <Form.Label htmlFor={field.id}>{field.label}</Form.Label>
                {field.type === "textarea" ? (
                  <Field
                    as="textarea"
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    className="form-control"
                    isInvalid={
                      (errors[field.id] && touched[field.id]) ||
                      (serverErrors && serverErrors[field.id])
                    }
                    disabled={field.disabled}
                  />
                ) : field.type !== "select" ? (
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
                    disabled={field.disabled}
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
                    disabled={field.disabled}
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
                      <p className="text-danger" key={index}>
                        {sError.message || sError}
                      </p>
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
    </>
  );
};

export default BaseForm;
