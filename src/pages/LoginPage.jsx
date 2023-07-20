import React, { useEffect, useContext } from "react";
import AuthContext, { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col, Row, Card, Form, Button, Image } from "react-bootstrap";
// import media files
import Logo from "../assets/images/brand/logo/logo.svg";
const LoginPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  let { loginUser } = useContext(AuthContext);

  return (
    <>
      <Row className="align-items-center justify-content-center g-0 min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <Card>
            <Card.Body className="p-6">
              <div className="mb-4">
                <Link to="/">
                  <Image src={Logo} className="mb-4" alt="" />
                </Link>
                <h1 className="mb-1 fw-bold">Sign in</h1>
                <span>
                  Don’t have an account?{" "}
                  <Link to="/authentication/sign-up" className="ms-1">
                    Sign up
                  </Link>
                </span>
              </div>
              {/* Form */}
              <Form onSubmit={loginUser}>
                <Row>
                  <Col lg={12} md={12} className="mb-3">
                    {/* Username or email */}
                    <Form.Label>Username or email </Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Email address here"
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    {/* Password */}
                    <Form.Label>Password </Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="**************"
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    {/* Checkbox */}
                    <div className="d-md-flex justify-content-between align-items-center">
                      <Form.Group
                        className="mb-3 mb-md-0"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                      <Link to="/authentication/forget-password">
                        Forgot your password?
                      </Link>
                    </div>
                  </Col>
                  <Col lg={12} md={12} className="mb-0 mt-4 d-grid gap-2">
                    {/* Button */}
                    <Button variant="primary" type="submit">
                      Sign in
                    </Button>
                  </Col>
                </Row>
              </Form>
              <div className="mb-4" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
