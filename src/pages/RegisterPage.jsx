import { useEffect, useContext, useState } from "react";
import AuthContext, { useAuth } from "../utils/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, Card, Button, Alert, FormGroup } from "react-bootstrap";
import NotificationContext from "../context/layout/NotificationContext";
import BaseForm from "../components/layout/BaseForm";
import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);

const RegisterPage = () => {
  const navigate = useNavigate();
  let { registerUser, registrationError, user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const form_fields = [
    {
      type: "text",
      label: "First Name",
      id: "first_name",
      invalid_feedback: "e.g. Rahul",
      placeholder: "Enter your First Name",
    },
    {
      type: "text",
      label: "Last Name",
      id: "last_name",
      invalid_feedback: "e.g. Sharma",
      placeholder: "Enter your Last Name",
    },
    {
      type: "email",
      label: "Email",
      id: "email",
      invalid_feedback: "e.g. yourname@gmail.com",
      placeholder: "Enter your Email Address",
    },
    {
      type: "password",
      label: "Password",
      id: "password1",
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

  const SignupSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    last_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password1: Yup.string()
      .required("Password is required")
      .min(
        5,
        "password must contain 5 or more characters with at least one of each: uppercase, lowercase, number and special"
      )
      .minLowercase(1, "password must contain at least 1 lower case letter")
      .minUppercase(1, "password must contain at least 1 upper case letter")
      .minNumbers(1, "password must contain at least 1 number")
      .minSymbols(1, "password must contain at least 1 special character"),
    password2: Yup.string().oneOf(
      [Yup.ref("password1"), null],
      "Passwords must match"
    ),
  });

  return (
    <>
      <Row className="align-items-center justify-content-center g-0 ">
        <Col lg={5} md={8} className="pt-4 ">
          <Card>
            <Card.Body className="p-6">
              <div className="mb-4">
                <h1 className="mb-1 fw-bold">Sign up</h1>
                <span>
                  Already have an account?{" "}
                  <Link to="/login/" className="ms-1">
                    Sign in
                  </Link>
                </span>
              </div>

              <BaseForm
                form_fields={form_fields}
                submit_label={"Sign up"}
                on_submit={registerUser}
                serverErrors={registrationError}
                validation_schema={SignupSchema}
              />

              <div className="mb-4" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RegisterPage;
