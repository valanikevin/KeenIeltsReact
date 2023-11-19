import React, { useEffect } from "react";
// import media files
import Avatar1 from "../../assets/images/avatar/avatar-1.jpg";
import ProfileCover from "../../components/layout/ProfileCover";
import { Container } from "react-bootstrap";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "KeenIELTS - The Smart Choice for IELTS Excellence";
  }, []);

  const dashboardData = {
    name: "Kevin Valani",
    email: "valanikevin@gmail.com",
    linkname: "Account Setting",
    link: "/account/",
  };

  return (
    <Container className="mt-3">
      <ProfileCover dashboardData={dashboardData} />
    </Container>
  );
};

export default DashboardPage;
