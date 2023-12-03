// import node module libraries
import { Col, Row, Container, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// import bootstrap icons
import { CheckCircleFill } from "react-bootstrap-icons";

// import media files
import EducationalSkils from "../../../assets/images/education/skils.jpg";
import SVGgraphics1 from "../../../assets/images/svg/graphics-1.svg";
import SVGgraphics2 from "../../../assets/images/svg/graphics-2.svg";

const HeroRightImage = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col xxl={5} xl={6} lg={6} xs={12}>
          <div>
            <h1 className="display-3 fw-bold mb-3">
              Practice <br />
              <u className="text-warning">
                <span className="text-primary">Real IELTS Tests</span>
              </u>
            </h1>
            <p className="lead mb-4">
              Practice with real tests, receive personalized feedback, and
              expert guidance for unparalleled exam readiness.
            </p>
            <ListGroup as="ul" bsPrefix="list-unstyled" className="mb-5">
              <ListGroup.Item as="li" bsPrefix="mb-2">
                <CheckCircleFill size={12} fill="var(--geeks-success)" />
                <span className="ms-2">Premium service for free</span>
              </ListGroup.Item>
              <ListGroup.Item as="li" bsPrefix="mb-2">
                <CheckCircleFill size={12} fill="var(--geeks-success)" />
                <span className="ms-2">No credit card required</span>
              </ListGroup.Item>
              <ListGroup.Item as="li" bsPrefix="mb-2">
                <CheckCircleFill size={12} fill="var(--geeks-success)" />
                <span className="ms-2">All four modules</span>
              </ListGroup.Item>
              <ListGroup.Item as="li" bsPrefix="mb-2">
                <CheckCircleFill size={12} fill="var(--geeks-success)" />
                <span className="ms-2">Instant personalized feedback</span>
              </ListGroup.Item>
            </ListGroup>
            <Link to="#!" className="btn btn-dark btn-lg">
              Start Practicing
            </Link>
          </div>
        </Col>
        <Col
          xxl={{ offset: 1, span: 5 }}
          xl={6}
          lg={6}
          xs={12}
          className="d-lg-flex justify-content-end"
        >
          <div className="mt-12 mt-lg-0 position-relative">
            <div className="position-absolute top-0 start-0 translate-middle  d-none d-md-block">
              <Image src={SVGgraphics2} alt="graphics-2" />
            </div>
            <Image
              src={EducationalSkils}
              alt="online course"
              className="img-fluid rounded-4 w-100 z-1 position-relative"
            />
            <div className="position-absolute top-100 start-100 translate-middle  d-none d-md-block">
              <Image src={SVGgraphics1} alt="graphics-1" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroRightImage;
