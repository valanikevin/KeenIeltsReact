import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  FormControl,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import { FiMessageCircle } from "react-icons/fi";
import * as Yup from "yup";
import useAxios from "../utils/useAxios";
import BaseForm from "./layout/BaseForm";
import { DJANGO_BASE_URL } from "../utils/config";

const CommentsCard = ({ unique_id }) => {
  const [error, setError] = useState(null);
  const [comments, setComments] = useState(null);

  const api = useAxios();

  const form_fields = [
    {
      type: "textarea",
      label: "Your Comment",
      id: "comment",
      invalid_feedback: "Add your comment here...",
      placeholder: "Add your comment here...",
      value: "",
    },
  ];

  const CommentsSchema = Yup.object().shape({
    comment: Yup.string().required("Comment is required"),
  });

  async function getComments() {
    try {
      const response = await api.post(
        DJANGO_BASE_URL + "/base/get_comments/" + unique_id + "/"
      );
      setComments(response.data["comments"]);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  async function addComment(values, handleSuccess) {
    try {
      // Fetch the current URL
      const currentUrl = window.location.href;

      // Add the current URL to your values object
      const dataToSend = {
        ...values,
        unique_id: unique_id,
      };

      // Post request with the updated data
      const response = await api.post(
        DJANGO_BASE_URL + "/base/add_comment/",
        dataToSend
      );

      // Handle Success
      handleSuccess();
      getComments();
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <Card>
        <Card.Header>
          <Stack direction="horizontal" gap={3}>
            <div>
              <h3 className="mt-2 fw-bold">Comments</h3>
            </div>
            <div className="ms-auto">
              <FiMessageCircle size={25} className="text-black" />
            </div>
          </Stack>
        </Card.Header>
        <Card.Body className="border-bottom">
          <BaseForm
            form_fields={form_fields}
            form_schema={CommentsSchema}
            submit_label="Post Comment"
            successMessage="Your comment has been added successfully"
            validation_schema={CommentsSchema}
            on_submit={addComment}
          />
        </Card.Body>
        {comments &&
          comments.map((comment) => (
            <Card.Body className="border-bottom">
              <Row className="d-flex justify-content-between">
                <Col xs={12}>
                  <p className="mb-0">
                    <span className="fw-bold">{comment.name}</span> •{" "}
                    {comment.short_date}
                  </p>
                  <p className="mb-0">{comment.comment}</p>
                </Col>
              </Row>
            </Card.Body>
          ))}
      </Card>
    </>
  );
};

export default CommentsCard;
