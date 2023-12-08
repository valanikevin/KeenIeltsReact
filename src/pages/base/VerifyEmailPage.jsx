import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
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
  const [activeKey, setActiveKey] = useState("0"); // New state for accordion active key

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

  const resend_form_fields = [
    {
      type: "email",
      label: "Email",
      id: "email",
      invalid_feedback: "e.g. yourname@gmail.com",
      placeholder: "Enter your Email Address",
      value: defaultEmail, // Set the default value
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

  const ResentVerifySchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const verifyEmail = async (values, handleSuccess) => {
    try {
      const response = await api.post(
        DJANGO_BASE_URL + "/account/verify_email/",
        values
      );
      handleSuccess();
      navigate(
        "/login?alert=Your email has been verified, please login now&variant=success"
      );
    } catch (error) {
      // Handle error accordingly
      console.error("Error fetching data:", error);
      setError(error.response.data.message);
    }
  };

  const resendOTP = async (values, handleSuccess) => {
    try {
      const response = await api.post(
        DJANGO_BASE_URL + "/account/send_verify_email/",
        values
      );
      handleSuccess();
      setActiveKey("0");
    } catch (error) {
      // Handle error accordingly
      console.error("Error fetching data:", error);
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <Container className="mb-5">
        <Row className="align-items-center justify-content-center mt-5">
          <Col lg={5} md={8} className="">
            <Accordion activeKey={activeKey}>
              <Accordion.Item eventKey="0" onClick={() => setActiveKey("0")}>
                <Accordion.Header>
                  {" "}
                  <h4 className="mt-2 fw-bold">Verify Email</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="mb-4">
                    <span>
                      We have sent you an email with a OTP to verify your email
                      address. Please enter your email address and the OTP
                      below.
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
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" onClick={() => setActiveKey("1")}>
                <Accordion.Header>
                  {" "}
                  <h4 className="mt-2 fw-bold">Resend OTP</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="mb-4">
                    <span>
                      We will send you an email with a OTP to verify your email,
                      please enter your email address below.
                    </span>
                  </div>

                  <BaseForm
                    form_fields={resend_form_fields}
                    submit_label={"Send OTP"}
                    validation_schema={ResentVerifySchema}
                    on_submit={resendOTP}
                    nonFieldErrors={error}
                    successMessage="Code Sent Successful"
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VerifyEmailPage;
