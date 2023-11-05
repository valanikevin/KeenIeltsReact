import React, { useState } from "react";
import useAxios from "../../utils/useAxios";
import * as Yup from "yup";
import { Container, Row, Col, Card } from "react-bootstrap";
import BaseForm from "../layout/BaseForm";
import { DJANGO_BASE_URL } from "../../utils/config";

const ChangePasswordForm = () => {
  const api = useAxios();
  const [error, setError] = useState(null);

  const form_fields = [
    {
      type: "password",
      label: "Old Password",
      id: "old_password",
      invalid_feedback: "Please enter your old password",
      placeholder: "*************",
    },
    {
      type: "password",
      label: "New Password",
      id: "new_password1",
      invalid_feedback: "Password should be strong",
      placeholder: "*************",
    },
    {
      type: "password",
      label: "Confirm Password",
      id: "new_password2",
      invalid_feedback: "Confirm password should  be same as Password",
      placeholder: "*************",
    },
  ];

  const ChangePasswordSchema = Yup.object().shape({
    old_password: Yup.string().required("Password is required"),
    new_password1: Yup.string()
      .required("Password is required")
      .min(
        8,
        "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
      )
      .minLowercase(1, "password must contain at least 1 lower case letter")
      .minUppercase(1, "password must contain at least 1 upper case letter")
      .minNumbers(1, "password must contain at least 1 number")
      .minSymbols(1, "password must contain at least 1 special character"),
    new_password2: Yup.string().oneOf(
      [Yup.ref("new_password1"), null],
      "Passwords must match"
    ),
  });

  const changePassword = async (values) => {
    try {
      const response = await api.post(
        DJANGO_BASE_URL + "/account/change_account_password/",
        values
      );
      // If the request is successful, handle the response accordingly
      console.log(response);
    } catch (err) {
      if (err.response) {
        setError(err.response.data);
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <Card>
      <Card.Header>
        <h3 className="mt-2 fw-bold">Change Password</h3>
      </Card.Header>
      <Card.Body>
        <BaseForm
          form_fields={form_fields}
          submit_label="Update"
          validation_schema={ChangePasswordSchema}
          on_submit={changePassword}
          serverErrors={error}
          successMessage="Password updated successfully."
        />
      </Card.Body>
    </Card>
  );
};

export default ChangePasswordForm;
