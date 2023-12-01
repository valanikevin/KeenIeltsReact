// import node module libraries
import { Col, Row, Container } from "react-bootstrap";

// import custom components
import SkillCourseCard from "../../../components/layout/cards/SkillCourseCard";

// import data files
import SkillCoursesData from "../../../data/marketing/landing-education/SkillCoursesData";

const ExploreBooksCard = () => {
  return (
    <Container>
      <Row>
        <Col xl={12} md={12} xs={12}>
          <div className="mb-6 mb-lg-8">
            <h2 className="h1 fw-bold">
              Explore Our Extensive{" "}
              <u className="text-warning">
                <span className="text-primary">IELTS Library</span>
              </u>
            </h2>
            <p className="mb-0 lead">
              Our library is continually updated every week, featuring the
              latest books and authentic real tests.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        {SkillCoursesData.map((item, index) => {
          return (
            <Col xl={3} md={6} xs={12} key={index}>
              <SkillCourseCard item={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ExploreBooksCard;
