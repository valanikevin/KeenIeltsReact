// import node module libraries
import {
  Row,
  Col,
  Image,
  Card,
  Button,
  Stack,
  Tab,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// import media files
import CheckedMark from "../../assets/images/svg/checked-mark.svg";
import ProfileBackground from "../../assets/images/background/profile-bg.jpg";
import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import useAxios from "../../utils/useAxios";
import { DJANGO_BASE_URL } from "../../utils/config";

const ProfileCover = ({ page = "dashboard" }) => {
  const [userData, setUserData] = useState({
    first_name: "Loading",
    last_name: "...",
  });
  const api = useAxios();
  function getUserDetails() {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUserData(userData);
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  if (!userData) {
    return null;
  }
  return (
    <Row className="align-items-center">
      <Col xl={12} lg={12} md={12} sm={12}>
        <div className=" bg-primary"> </div>
        <Card className=" border">
          <Card.Header className="">
            <h2 className="mb-0">
              {userData.first_name} {userData.last_name}
            </h2>
          </Card.Header>
          <Card.Body className="p-0">
            <Tab.Container defaultActiveKey={String(page)}>
              <Nav className="nav-lb-tab ">
                <Nav.Item>
                  <Nav.Link
                    eventKey="dashboard"
                    className="mb-sm-3 mb-md-0"
                    as={Link}
                    to={"/dashboard/"}
                  >
                    Dashboard
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    eventKey="tests"
                    className="mb-sm-3 mb-md-0"
                    as={Link}
                    to={"/dashboard/tests/"}
                  >
                    Your Tests
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    eventKey="account"
                    className="mb-sm-3 mb-md-0"
                    as={Link}
                    to={"/account/"}
                  >
                    Settings
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Col>

      <Col
        xl={12}
        lg={12}
        md={12}
        sm={12}
        className="mt-3"
        eventKey="dashboard"
      ></Col>
    </Row>
  );
};

export default ProfileCover;
