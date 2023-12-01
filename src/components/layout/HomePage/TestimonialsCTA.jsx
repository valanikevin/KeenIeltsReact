import { Container, Row, Col } from "react-bootstrap";

// import custom components
import TestimonialColorCard from "./TestimonialColorCard";
import SectionHeadingCenter from "./SectionHeadingCenter";

// import data files
import { TestimonialsList } from "./TestimonialsList";

const TestimonialsCTA = () => {
  return (
    <Container>
      <SectionHeadingCenter
        title={"What our learners are saying"}
        description={"12+ million people are already learning on Geeks"}
        subtitle={"Testimonials"}
      />
      <Row>
        {TestimonialsList.slice(0, 2).map((item, index) => (
          <Col md={6} sm={12} key={index}>
            <TestimonialColorCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestimonialsCTA;
