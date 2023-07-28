// import node module libraries
import { Col, Row, Container } from "react-bootstrap";

const PageHeadingBriefinfo = ({
  pagetitle,
  briefinfo,
  color = "bg-primary",
}) => {
  return (
    <section className={color}>
      <Container>
        <Row className="align-items-center">
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="py-4 py-lg-6">
              <h2 className="mb-1 text-white">{pagetitle}</h2>
              <p className="text-white mb-0 " style={{ fontSize: "1.1rem" }}>
                {briefinfo}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageHeadingBriefinfo;
