import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BaseForm from "../../components/layout/BaseForm";
import * as Yup from "yup";
import { DJANGO_BASE_URL } from "../../utils/config";
import usePublicAxios from "../../utils/usePublicAxios";
import AuthContext from "../../context/AuthContext";

const VerifyEmailPage = () => {
  const location = useLocation();
  const [defaultEmail, setDefaultEmail] = useState("");
  const api = usePublicAxios();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  let { registerUser, registrationError, user } = useContext(AuthContext);

  useEffect(() => {
    // Function to parse the URL query string
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get("email");
    if (email) {
      setDefaultEmail(email);
    }
  }, [location]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

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

  const verifyEmail = async (values, handleSuccess) => {
    try {
      const response = await api.post(
        DJANGO_BASE_URL + "/account/verify_email/",
        values
      );
      handleSuccess();
      navigate("/login");
    } catch (error) {
      // Handle error accordingly
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
                  on_submit={verifyEmail}
                  nonFieldErrors={error}
                  successMessage="Verification Successful"
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
