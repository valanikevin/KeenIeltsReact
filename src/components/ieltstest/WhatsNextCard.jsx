import React, { useState } from "react";
import { Button, Card, Col, Modal, Row, Stack } from "react-bootstrap";
import { FiAlertCircle, FiHome, FiPieChart } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import useAxios from "../../utils/useAxios";
import BaseForm from "../layout/BaseForm";
import { DJANGO_BASE_URL } from "../../utils/config";

const WhatsNextCard = () => {
  const [showReportMistakeModal, setShowReportMistakeModal] = useState(false);
  const handleCloseReportMistakeModal = () => setShowReportMistakeModal(false);
  const handleShowReportMistakeModal = () => setShowReportMistakeModal(true);
  const [error, setError] = useState(null);
  const api = useAxios();

  const form_fields = [
    {
      type: "select",
      label: "Issue Type",
      id: "issueType",
      invalid_feedback: "What type of issue you're facing?",
      placeholder: "What type of issue you're facing?",
      value: "incorrect-answers",
      options: [
        { value: "incorrect-answers", label: "Incorrect Answers" },
        { value: "incorrect-audio", label: "Incorrect Audio" },
        { value: "incorrect-question", label: "Incorrect Question" },
        { value: "other", label: "Other" },
      ],
    },
    {
      type: "textarea",
      label: "Issue Description",
      id: "issueDescription",
      invalid_feedback: "Describe the issue",
      placeholder: "Describe the issue",
      value: "",
    },
  ];

  const ReportMistakeSchema = Yup.object().shape({
    issueType: Yup.string().required("Issue Type is required"),
    issueDescription: Yup.string().required("Issue Description is required"),
  });

  async function reportMistake(values, handleSuccess) {
    try {
      // Fetch the current URL
      const currentUrl = window.location.href;

      // Add the current URL to your values object
      const dataToSend = {
        ...values,
        currentUrl: currentUrl,
      };

      // Post request with the updated data
      const response = await api.post(
        DJANGO_BASE_URL + "/base/report_mistake/",
        dataToSend
      );

      handleSuccess();

      setTimeout(() => {
        handleCloseReportMistakeModal();
      }, 3000);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.response.data.message);
    }
  }

  return (
    <>
      <Card>
        <Card.Header>
          <h3 className="mt-2 fw-bold">What's Next?</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col sm={12} lg={4} className="mb-2  ">
              <Button
                as={Link}
                to={"/"}
                className="btn-lg   w-100 mb-2"
                variant="outline-primary"
              >
                <Stack direction="horizontal" gap={1}>
                  <div>Go To Dashboard</div>
                  <div className="ms-auto">
                    <FiHome size={25} />
                  </div>
                </Stack>
              </Button>
            </Col>
            <Col sm={12} lg={4} className="mb-2">
              <Button
                onClick={handleShowReportMistakeModal}
                className="btn-lg  w-100"
                variant="outline-danger"
              >
                <Stack direction="horizontal" gap={1}>
                  <div>Report Mistake</div>
                  <div className="ms-auto">
                    <FiAlertCircle size={25} />
                  </div>
                </Stack>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal
        show={showReportMistakeModal}
        onHide={handleCloseReportMistakeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Report Mistake</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BaseForm
            form_fields={form_fields}
            submit_label={"Report Mistake"}
            on_submit={reportMistake}
            serverErrors={error}
            validation_schema={ReportMistakeSchema}
            successMessage="Mistake Reported Successfully"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WhatsNextCard;
