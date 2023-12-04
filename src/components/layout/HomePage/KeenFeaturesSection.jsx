import React from "react";
// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import SectionHeadingCenter from "./SectionHeadingCenter";

// import sub components
import FeatureDescriptionCard from "./FeatureDescriptionCard";

// import feature icons images
import FeatureIcon1 from "../../../assets/images/svg/feature-icon-1.svg";
import FeatureIcon2 from "../../../assets/images/svg/feature-icon-2.svg";
import FeatureIcon3 from "../../../assets/images/svg/feature-icon-3.svg";
import FeatureIcon4 from "../../../assets/images/svg/feature-icon-4.svg";

const KeenFeaturesSection = () => {
  const title = "Why Choose Keen IELTS?";
  const subtitle = "Benefits";
  const description = `At Keen IELTS, we're not just about preparing you for the test; we're about redefining your learning journey. Our platform combines the latest in educational technology with expert insights to offer a preparation experience that's as unique as your aspirations.`;

  return (
    <section className=" ">
      <Container>
        <SectionHeadingCenter
          title={title}
          description={description}
          subtitle={subtitle}
        />
        <Row>
          {CourseDescriptionList.map((item) => (
            <Col lg={6} sm={12} key={item.id} className="d-flex">
              <FeatureDescriptionCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const CourseDescriptionList = [
  {
    id: 1,
    icon: FeatureIcon1,
    title: "Real-World Test Simulations",
    shortdescription:
      "Immerse yourself in an environment that mirrors the actual IELTS exam. Our practice tests are crafted to replicate real test scenarios, giving you a true taste of what to expect on test day.",
  },
  {
    id: 2,
    icon: FeatureIcon2,
    title: "Instant Personalized Feedback",
    shortdescription:
      "Benefit from the precision of Amrita AI. Our system provides personalized feedback and strategies tailored to your unique strengths and areas for improvement, ensuring a targeted and efficient study approach.",
  },
  {
    id: 3,
    icon: FeatureIcon3,
    title: "Expert-Curated Content",
    shortdescription:
      "Our content is not just comprehensive; it's curated by former IELTS examiners and top linguistic experts. This ensures that you're studying with the most relevant, up-to-date material that closely aligns with the IELTS standards.",
  },
  {
    id: 4,
    icon: FeatureIcon4,
    title: "Flexible and Accessible Learning",
    shortdescription:
      "With Keen IELTS, learn at your pace, on your schedule. Our platform is designed for accessibility and flexibility, allowing you to practice anytime, anywhere, on any device.",
  },
];

export default KeenFeaturesSection;
