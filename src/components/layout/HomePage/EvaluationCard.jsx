import { Col, Row, Container, Image } from "react-bootstrap";

// import bootstrap icons
import {
  PatchCheckFill,
  Trophy,
  Star,
  Nut,
  ShieldLock,
} from "react-bootstrap-icons";

// import media files
import Certificate from "../../../assets/images/education/certificate.jpg";

const EvaluationCard = () => {
  const programFeatures = [
    {
      id: 1,
      icon: <Trophy size={20} />,
      title: "Learn from Industry Experts",
      description:
        "Lorem ipsum dolor sit amet, conse ctetur adipisc amus ac iaculis arcu.",
    },
    {
      id: 2,
      icon: <Star size={20} />,
      title: "Free Resources",
      description:
        "Pellentesque sagittis placerat mollii purus onvallis venenatis asapien.",
    },
    {
      id: 3,
      icon: <ShieldLock size={20} />,
      title: "Learn Anytime, Anywhere",
      description:
        "Integer ultricies lorem nec erat fau euismod ipsum nislnec leo iaculis.",
    },
    {
      id: 4,
      icon: <Nut size={20} />,
      title: "Skill-based Learning",
      description:
        "Duis sed sollicitudin narcu mi, faucibus in sapien non, auctor placerat arcu.",
    },
  ];
  return (
    <Container>
      <Row>
        <Col xl={{ offset: 3, span: 6 }} md={12} xs={12}>
          <div className="text-center mb-lg-10 mb-6">
            <h2 className="h1 fw-bold">
              Real Test{" "}
              <u className="text-warning">
                <span className="text-primary">Evaluation</span>
              </u>
            </h2>
            <p className="lead mb-0">
              Online courses certification section design for showcase your
              certificate program features.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center ">
        <Col xl={5} lg={6} md={12} xs={12}>
          <div className="mb-6 mb-lg-0">
            <div className="mb-2">
              <Image
                src={Certificate}
                alt="certificate"
                className="img-fluid w-100"
              />
            </div>
            <div className="d-flex">
              <span className="text-primary">
                <PatchCheckFill size={12} />
              </span>
              <span className="ms-2">
                Completion certificate awarded on every course completion
              </span>
            </div>
          </div>
        </Col>
        <Col xl={{ offset: 1, span: 6 }} lg={6} md={12} xs={12}>
          <Row className="row-cols-2">
            {programFeatures.map((item, index) => {
              return (
                <Col key={index}>
                  <div className="mb-4 mb-xl-6">
                    <div className="mb-4 text-primary">{item.icon}</div>
                    <div>
                      <h4> {item.title}</h4>
                      <p> {item.description}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default EvaluationCard;
