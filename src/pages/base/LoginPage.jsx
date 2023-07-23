import { useEffect, useContext } from "react";
import AuthContext, { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col, Row, Card, Form, Button, Alert } from "react-bootstrap";
import NotificationContext from "../../context/layout/NotificationContext";
import BaseForm from "../../components/layout/BaseForm";
import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);
const LoginPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { notification, setNotification } = useContext(NotificationContext);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  let { loginUser, error } = useContext(AuthContext);
  const form_fields = [
    {
      type: "email",
      label: "Email",
      id: "email",
      placeholder: "Enter your Email Address",
    },
    {
      type: "password",
      label: "Password",
      id: "password",
      placeholder: "*************",
    },
  ];

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <>
      <Row className="align-items-center justify-content-center g-0 ">
        <Col lg={5} md={8} className="py-4 ">
          <Card>
            <Card.Body className="p-6">
              <div className="mb-4">
                <h1 className="mb-1 fw-bold">Sign in</h1>
                <span>
                  Don’t have an account?{" "}
                  <Link to="/register/" className="ms-1">
                    Sign up
                  </Link>
                </span>
              </div>
              {/* Form */}
              <BaseForm
                form_fields={form_fields}
                validation_schema={SignInSchema}
                on_submit={loginUser}
                submit_label={"Sign in"}
                serverErrors={error}
              />
              <div className="mb-4" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;