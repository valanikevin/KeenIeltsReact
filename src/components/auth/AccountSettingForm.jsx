import React from "react";
import useAxios from "../../utils/useAxios";
import { Container, Row, Col, Card } from "react-bootstrap";
import * as Yup from "yup";
import BaseForm from "../layout/BaseForm";
import { DJANGO_BASE_URL } from "../../utils/config";

const AccountSettingForm = () => {
  const api = useAxios();

  const form_fields = [
    {
      type: "text",
      label: "First Name",
      id: "first_name",
      invalid_feedback: "e.g. Rahul",
      placeholder: "Enter your First Name",
      value: "Kevin",
    },
    {
      type: "text",
      label: "Last Name",
      id: "last_name",
      invalid_feedback: "e.g. Sharma",
      placeholder: "Enter your Last Name",
      value: "Valani",
    },
    {
      type: "select",
      label: "Test Type",
      id: "testType",
      invalid_feedback: "Select Academic or General",
      placeholder: "What IELTS test you're preparing?",
      value: "academic",
      options: [
        { value: "academic", label: "Academic" },
        { value: "general", label: "General" },
      ],
    },
  ];

  const AccountSettingSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    last_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    testType: Yup.string().required("You must select a test type"),
  });

  const updateAccountSetting = async (values) => {
    try {
      const response = await api.post(
        DJANGO_BASE_URL + "/account/update_account_settings/",
        values
      );
      // If the request is successful, handle the response accordingly
      console.log(response.data); // Or handle success another way, e.g., show a success message
    } catch (error) {
      // If the request fails, handle the error accordingly
      console.error(error.response || error.message); // Or handle error another way, e.g., show an error message
    }
  };
  return (
    <Card>
      <Card.Header>
        <h3 className="mt-2 fw-bold">Personal Information & Preferences</h3>
      </Card.Header>
      <Card.Body>
        <BaseForm
          form_fields={form_fields}
          submit_label="Update"
          successMessage="Your account settings have been updated successfully"
          validation_schema={AccountSettingSchema}
          on_submit={updateAccountSetting}
        />
      </Card.Body>
    </Card>
  );
};

export default AccountSettingForm;
