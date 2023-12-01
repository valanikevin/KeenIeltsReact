import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

// import MDI icons
import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";

const HeroTyped = () => {
  return (
    <section className="py-lg-18 py-10 bg-auto bg-white hero-graphics">
      <Container>
        <Row className="justify-content-center">
          <Col xl={7} lg={7} md={12}>
            <div className="py-8 py-lg-0 text-center">
              <h1 className="display-2 fw-bold mb-3 text-primary">
                <span className="text-dark px-3 px-md-0">
                  Practice Actual IELTS
                </span>
                <br />
              </h1>
              <h2 className="display-3">
                <span className="text-primary ms-2">
                  <Typewriter
                    words={[
                      "Listening Tests",
                      "Reading Tests",
                      "Writing Tests",
                      "Speaking Tests",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
              <p className="mb-6 h2 text-dark">
                Build skills with courses Join Geeks to watch, play, learn,
                make, and discover, uscipit esi viimentum laoreet non et odio.
              </p>
              <Link
                to="/marketing/pages/pricing"
                className="btn btn-primary me-2"
              >
                View Plans
              </Link>
              <Link
                to="/authentication/sign-up"
                className="btn btn-outline-primary"
              >
                Try for Free
              </Link>

              <div className="mt-8 mb-0">
                <ListGroup as="ul" bsPrefix="list-inline">
                  <ListGroup.Item
                    as="li"
                    bsPrefix="list-inline-item text-dark fw-semi-bold lh-1 fs-4 me-3 mb-2 mb-md-0"
                  >
                    <span className="icon-shape icon-xs rounded-circle bg-light-success text-center me-2">
                      <Icon
                        path={mdiCheck}
                        size={0.7}
                        className="text-success"
                      />
                    </span>
                    <span className="align-middle">30,000 online courses</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    bsPrefix="list-inline-item text-dark fw-semi-bold lh-1 fs-4 me-3 mb-2 mb-md-0"
                  >
                    <span className="icon-shape icon-xs rounded-circle bg-light-success text-center me-2">
                      <Icon
                        path={mdiCheck}
                        size={0.7}
                        className="text-success"
                      />
                    </span>
                    <span className="align-middle">Expert instruction</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    bsPrefix="list-inline-item text-dark fw-semi-bold lh-1 fs-4"
                  >
                    <span className="icon-shape icon-xs rounded-circle bg-light-success text-center me-2">
                      <Icon
                        path={mdiCheck}
                        size={0.7}
                        className="text-success"
                      />
                    </span>
                    <span className="align-middle">Lifetime access</span>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroTyped;
