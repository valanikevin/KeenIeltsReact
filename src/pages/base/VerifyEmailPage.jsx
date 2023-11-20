import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import BaseForm from "../../components/layout/BaseForm";
import * as Yup from "yup";

const VerifyEmailPage = () => {
  const location = useLocation();
  const [defaultEmail, setDefaultEmail] = useState("");

  useEffect(() => {
    // Function to parse the URL query string
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get("email");
    if (email) {
      setDefaultEmail(email);
    }
  }, [location]);
  const form_fields = [
    {
      type: "email",
      label: "Email",
      id: "email",
      invalid_feedback: "e.g. yourname@gmail.com",
      placeholder: "Enter your Email Address",
      value: defaultEmail, // Set the default value
    },
    {
      type: "number",
      label: "OTP",
      id: "otp",
      invalid_feedback: "e.g. 123456",
      placeholder: "Enter OTP",
    },
  ];

  const VerifySchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    otp: Yup.number()
      .required("Required")
      .required("Required")
      .min(100000, "OTP must be 6 digits")
      .max(999999, "OTP must be 6 digits"),
  });

  return (
    <>
      <Container>
        <Row className="align-items-center justify-content-center ">
          <Col lg={5} md={8} className="">
            <Card className="mt-5">
              <Card.Body className="">
                <div className="mb-4">
                  <h1 className="mb-1 fw-bold">Verify Email</h1>
                  <span>
                    We have sent you an email with a OTP to verify your email
                    address. Please enter your email address and the OTP below.
                  </span>
                </div>

                <BaseForm
                  form_fields={form_fields}
                  submit_label={"Verify"}
                  validation_schema={VerifySchema}
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

export default VerifyEmailPage;
