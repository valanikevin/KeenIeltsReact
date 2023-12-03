import { Container, Row, Col } from "react-bootstrap";

// import custom components
import TestimonialColorCard from "./TestimonialColorCard";
import SectionHeadingCenter from "./SectionHeadingCenter";
import Avatar1 from "../../../assets/images/avatar/avatar-1.jpg";
import Avatar2 from "../../../assets/images/avatar/avatar-2.jpg";

const TestimonialsCTA = () => {
  return (
    <Container>
      <SectionHeadingCenter
        title={"What our students are saying"}
        description={"1000+ people are already practicing on Keen IELTS"}
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

const TestimonialsList = [
  {
    id: 1,
    name: "Barry Watson",
    designation: "Nigeria",
    image: Avatar1,
    content:
      "Keen IELTS transformed my test preparation experience. The real test simulations and instant feedback were game-changers for me. I achieved a band score beyond my expectations. Highly recommend it to anyone serious about acing IELTS!",
    rating: 5.0,
    color: "primary",
  },
  {
    id: 2,
    name: "Linda Shenoy",
    designation: "Algeria",
    image: Avatar2,
    content:
      "The level of detail in Keen IELTS's evaluations is incredible. The feedback from Amrita AI on my writing and speaking tests really helped me understand where I needed to focus. It's like having a personal tutor guiding you through the process.",
    rating: 5.0,
    color: "info",
  },
];

export default TestimonialsCTA;
