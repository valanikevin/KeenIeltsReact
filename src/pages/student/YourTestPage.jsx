import React from "react";
import { Container } from "react-bootstrap";
import ProfileCover from "../../components/layout/ProfileCover";

const YourTestPage = () => {
  return (
    <Container className="mt-3">
      <ProfileCover page={"tests"} />
    </Container>
  );
};

export default YourTestPage;
