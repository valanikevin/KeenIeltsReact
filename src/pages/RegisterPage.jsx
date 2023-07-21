import { useEffect, useContext, useState } from "react";
import AuthContext, { useAuth } from "../utils/AuthContext";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  Alert,
  FormGroup,
} from "react-bootstrap";
import NotificationContext from "../context/layout/NotificationContext";
import BaseForm from "../components/layout/BaseForm";

const RegisterPage = () => {
  let { registerUser, registrationError } = useContext(AuthContext);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      registerUser(e);
    }

    setValidated(true);
  };

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
              {registrationError && (
                <div>{JSON.stringify(registrationError)}</div>
              )}
              {/* Form */}
              <BaseForm
                form_fields={form_fields}
                submit_label={"Sign up"}
                on_submit={registerUser}
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
