// import node module libraries
import { Row, Col, Image, Card, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

// import media files
import CheckedMark from "../../assets/images/svg/checked-mark.svg";
import ProfileBackground from "../../assets/images/background/profile-bg.jpg";
import { FiUser } from "react-icons/fi";

const ProfileCover = ({ userData }) => {
  return (
    <Row className="align-items-center">
      <Col xl={12} lg={12} md={12} sm={12}>
        <div className=" bg-primary"> </div>
        <Card className="px-4 pt-3 pb-4 border">
          <Stack direction="horizontal" gap={2} className="mt-2">
            <div>
              <h2 className="mb-0">
                {userData.first_name} {userData.last_name}
              </h2>
            </div>
            <div className="ms-auto">
              <Link
                to={"/account/"}
                className={`btn btn-outline-primary btn-sm`}
              >
                Account Setting
              </Link>
            </div>
          </Stack>
        </Card>
      </Col>
    </Row>
  );
};

export default ProfileCover;
