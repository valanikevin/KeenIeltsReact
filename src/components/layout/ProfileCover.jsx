// import node module libraries
import { Row, Col, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import media files
import CheckedMark from "../../assets/images/svg/checked-mark.svg";
import ProfileBackground from "../../assets/images/background/profile-bg.jpg";
import { FiUser } from "react-icons/fi";

const ProfileCover = ({ dashboardData }) => {
  return (
    <Row className="align-items-center">
      <Col xl={12} lg={12} md={12} sm={12}>
        <div className="pt-4 rounded-top-md bg-primary"> </div>
        <Card className="px-4 pt-2 pb-4 rounded-0 rounded-bottom shadow-sm">
          <div className="d-flex align-items-end justify-content-between  ">
            <div className="d-flex align-items-center">
              <div className="lh-1">
                <h2 className="mb-0">{dashboardData.name}</h2>
                <p className="mb-0 d-block">{dashboardData.email}</p>
              </div>
            </div>
            <div>
              <Link
                to={dashboardData.link}
                className={`btn btn${
                  dashboardData.outlinebutton ? "-outline" : ""
                }-primary btn-sm d-none d-md-block`}
              >
                {dashboardData.linkname}
              </Link>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ProfileCover;
