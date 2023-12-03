import { Col, Row, Container, Image } from "react-bootstrap";

// import bootstrap icons
import {
  PatchCheckFill,
  PencilSquare,
  Book,
  Earbuds,
  ChatLeftQuote,
} from "react-bootstrap-icons";

// import media files
import DashboardImage from "../../../assets/images/app/dashboard.webp";

const EvaluationCard = () => {
  const programFeatures = [
    {
      id: 1,
      icon: <ChatLeftQuote size={30} />,
      title: "Speaking Evaluation",
      description:
        "Your responses are evaluated by Amrita AI, developed under the guidance of former IELTS examiners. ",
    },
    {
      id: 2,
      icon: <Earbuds size={30} />,
      title: "Listening Evaluation",
      description:
        "Our listening tests mirror actual exams, offering you an immersive practice experience. ",
    },
    {
      id: 3,
      icon: <Book size={30} />,
      title: "Reading Evaluation",
      description:
        "Our advanced platform replicates the IELTS reading test environment, providing instant feedback and band scores. ",
    },
    {
      id: 4,
      icon: <PencilSquare size={30} />,
      title: "Writing Evaluation",
      description:
        "Our Amrita AI algorithm offers detailed, constructive feedback and tailored suggestions, guiding you towards writing excellence.",
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
              Our evaluation system, intricately aligned with official IELTS
              criteria, is the brainchild of insights from ex-IELTS examiners.
              It's designed to provide you with the most realistic and accurate
              assessment.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center ">
        <Col xl={5} lg={6} md={12} xs={12}>
          <div className="mb-6 mb-lg-0">
            <div className="mb-2">
              <Image
                src={DashboardImage}
                alt="certificate"
                className="img-fluid w-100"
              />
            </div>
            <div className="d-flex">
              <span className="text-primary">
                <PatchCheckFill size={12} />
              </span>
              <span className="ms-2">
                Analytical dashboard to track your progress.
              </span>
            </div>
          </div>
        </Col>
        <Col xl={{ offset: 1, span: 6 }} lg={6} md={12} xs={12}>
          <Row>
            {programFeatures.map((item, index) => {
              return (
                <Col key={index} md={12} lg={6}>
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
