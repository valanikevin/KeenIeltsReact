import { useEffect, useContext, useState } from "react";
import AuthContext, { useAuth } from "../../utils/AuthContext";
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
import NotificationContext from "../../context/layout/NotificationContext";

const BaseForm = ({ form_fields, submit_label, on_submit }) => {
  let { registerUser, registrationError } = useContext(AuthContext);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      on_submit(e);
    }

    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        {form_fields.map((field) => (
          <FormGroup as={Col} lg={12} md={12} className="mb-3" key={field.id}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              required
            />
            <Form.Control.Feedback type="invalid">
              {field.invalid_feedback}
            </Form.Control.Feedback>
          </FormGroup>
        ))}

        <Col lg={12} md={12} className="mb-0 mt-4 d-grid gap-2">
          {/* Button */}
          <Button variant="primary" type="submit">
            {submit_label}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BaseForm;
