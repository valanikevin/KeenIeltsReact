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

const BaseForm = ({
  form_fields,
  submit_label,
  on_submit,
  errors,
  validation_schema,
}) => {
  let initialValues = {};

  form_fields.forEach(function (field) {
    initialValues[field.id] = "";
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
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
                  as={Form.Control}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  isInvalid={
                    errors[field.id] && touched[field.id] ? true : false
                  }
                  isValid={
                    errors[field.id] === undefined && touched[field.id]
                      ? true
                      : false
                  }
                />
                {errors[field.id] && touched[field.id] ? (
                  <Form.Control.Feedback type="invalid">
                    {errors[field.id]}
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
