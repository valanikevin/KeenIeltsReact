import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import * as Yup from "yup";
import { DJANGO_BASE_URL } from "../../utils/config";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import BaseForm from "../../components/layout/BaseForm";
import { Link } from "react-router-dom";
import usePublicAxios from "../../utils/usePublicAxios";

const ResetPasswordPage = () => {
  let { registerUser, registrationError, user } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const form_fields = [
    {
      type: "email",
      label: "Email",
      id: "email",
      invalid_feedback: "e.g. yourname@gmail.com",
      placeholder: "Enter your Email Address",
    },
  ];

  const api = usePublicAxios();

  const ResetSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const resetPassword = async (values, handleSuccess) => {
    try {
      const response = await api.post(
        DJANGO_BASE_URL + "/account/password_reset/",
        values
      );
      handleSuccess();
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Container>
        <Row className="align-items-center justify-content-center ">
          <Col lg={5} md={8} className="">
            <Card className="mt-5">
              <Card.Body className="">
                <div className="mb-4">
                  <h1 className="mb-1 fw-bold">Reset Password</h1>
                  <span>
                    We will send you an email to reset your password. Please
                    make sure to check your spam folder.
                  </span>
                </div>
                {/* Form */}
                <BaseForm
                  form_fields={form_fields}
                  validation_schema={ResetSchema}
                  on_submit={resetPassword}
                  submit_label={"Send Reset Email"}
                  nonFieldErrors={error}
                  successMessage="Password reset email sent successfully!"
                />
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <Button
                      as={Link}
                      to={"/login/"}
                      variant="outline-primary"
                      className="w-100"
                    >
                      Sign In
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      as={Link}
                      to={"/register/"}
                      variant="outline-primary"
                      className="w-100"
                    >
                      Create Account
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResetPasswordPage;
