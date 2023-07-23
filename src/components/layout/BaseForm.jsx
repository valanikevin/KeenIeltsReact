import { useEffect, useContext, useState } from "react";
import AuthContext, { useAuth } from "../../utils/AuthContext";
import { Link } from "react-router-dom";
import { Formik, Field, Form as FormikForm } from "formik";
import * as Yup from "yup";

import {
  Col,
  Row,
  Card,
  Form,
  Button,
  Alert,
  FormGroup,
} from "react-bootstrap";
import NotificationContext from "../../context/layout/NotificationContext";
import LoadingContext from "../../context/layout/LoadingContext";

const BaseForm = ({
  form_fields,
  submit_label,
  on_submit,
  serverErrors,
  validation_schema,
}) => {
  let initialValues = {};
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);

  form_fields.forEach(function (field) {
    initialValues[field.id] = "";
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          setLoadingBar(true);
          on_submit(values, resetForm, initialValues);
        }}
        validationSchema={validation_schema}
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
                <Field
                  type={field.type}
                  as={Form.Control}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  isInvalid={
                    (errors[field.id] && touched[field.id]) ||
                    (serverErrors && serverErrors[field.id])
                      ? true
                      : false
                  }
                  isValid={
                    (errors[field.id] === undefined && touched[field.id]) ||
                    (serverErrors && serverErrors[field.id] === undefined)
                      ? true
                      : false
                  }
                />
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

            <Col lg={12} md={12} className="mb-0 mt-4 d-grid gap-2">
              {/* Button */}
              <Button
                variant="primary"
                type="submit"
                disabled={!(isValid && dirty)}
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
