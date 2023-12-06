// import node module libraries
import { Row, Col, Image, Card, Button } from "react-bootstrap";
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
          <div className="d-flex align-items-end justify-content-between  ">
            <div className="d-flex align-items-center">
              <div className="lh-1">
                <h2 className="mb-0">
                  {userData.first_name} {userData.last_name}
                </h2>
                <p className="mb-0 d-block">{userData.email}</p>
              </div>
            </div>
            <div>
              <Link to={"/account/"} className={`btn btn-outline-primary`}>
                Account Setting
              </Link>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ProfileCover;
