import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Image, Container, Button } from "react-bootstrap";

// import media files
import ErrorImage from "../assets/images/error/404-error-img.svg";
const ErrorPage = () => {
  function goToDashboard() {
    window.location.href = "/";
  }
  return (
    <Fragment>
      <Container>
        <Row className="align-items-center justify-content-center g-0 py-lg-22 py-10">
          <Col
            xl={{ offset: 1, span: 4 }}
            lg={6}
            md={12}
            className="text-center text-lg-start"
          >
            <h1 className="display-1 mb-3">Server Error</h1>
            <p className="mb-5 lead">
              We're sorry, but something went wrong. We have been notified about
              this issue and we'll take a look at it shortly.
              <br />
              <br />
              Please{" "}
              <Link to="mailto:team@keenielts.com" className="btn-link">
                <u>Contact us</u>
              </Link>{" "}
              if the problem persists.
            </p>
            <Button className="btn btn-primary me-2" onClick={goToDashboard}>
              Back to Dashboard
            </Button>
          </Col>
          <Col
            xl={{ offset: 1, span: 6 }}
            lg={6}
            md={12}
            className="mt-8 mt-lg-0"
          >
            <Image src={ErrorImage} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ErrorPage;
