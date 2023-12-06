import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import * as Yup from "yup";
import { DJANGO_BASE_URL } from "../../utils/config";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import BaseForm from "../../components/layout/BaseForm";
import { Link, useLocation } from "react-router-dom";
import usePublicAxios from "../../utils/usePublicAxios";

const ConfirmResetPassword = () => {
  let { registerUser, registrationError, user } = useContext(AuthContext);
  const [defaultEmail, setDefaultEmail] = useState("");
  const [defaultToken, setDefaultToken] = useState("");

  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Function to parse the URL query string
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get("email");
    const token = queryParams.get("token");

    if (email) {
      setDefaultEmail(email);
    }

    if (token) {
      setDefaultToken(token);
    }
  }, [location]);

  const form_fields = [
    {
      type: "email",
      label: "Email",
      id: "email",
      invalid_feedback: "e.g. yourname@gmail.com",
      placeholder: "Enter your Email Address",
      value: defaultEmail,
      disabled: defaultEmail ? true : false,
    },
    {
      type: "text",
      label: "Token",
      id: "token",
      invalid_feedback: "Reset Password Token",
      placeholder: "Enter your Reset Password Token",
      value: defaultToken,
      disabled: defaultToken ? true : false,
    },
    {
      type: "password",
      label: "Password",
      id: "password",
      invalid_feedback: "Password should be strong",
      placeholder: "*************",
    },
    {
      type: "password",
      label: "Confirm Password",
      id: "password2",
      invalid_feedback: "Confirm password should  be same as Password",
      placeholder: "*************",
    },
  ];

  const ConfirmResetSchema = Yup.object().shape({
    token: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(
        8,
        "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
      )
      .minLowercase(1, "password must contain at least 1 lower case letter")
      .minUppercase(1, "password must contain at least 1 upper case letter")
      .minNumbers(1, "password must contain at least 1 number")
      .minSymbols(1, "password must contain at least 1 special character"),
    password2: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const ConfirmResetPassword = async (values, handleSuccess) => {
    try {
      const response = await api.post(
        DJANGO_BASE_URL + "/account/password_reset/confirm/",
        values
      );
      handleSuccess();
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <Container>
        <Row className="align-items-center justify-content-center ">
          <Col lg={5} md={8} className="">
            <Card className="mt-5">
              <Card.Body className="">
                <div className="mb-4">
                  <h1 className="mb-1 fw-bold">Reset Password </h1>
                </div>

                <BaseForm
                  form_fields={form_fields}
                  submit_label={"Set Password"}
                  on_submit={ConfirmResetPassword}
                  serverErrors={error}
                  validation_schema={ConfirmResetSchema}
                  successMessage="Password Reset Successful"
                />

                <div className="mb-4" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConfirmResetPassword;
