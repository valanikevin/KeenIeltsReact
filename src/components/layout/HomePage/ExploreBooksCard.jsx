// import node module libraries
import { Col, Row, Container, Button, Stack } from "react-bootstrap";
import {
  PatchCheckFill,
  PencilSquare,
  Book,
  Earbuds,
  ChatLeftQuote,
  CheckCircleFill,
} from "react-bootstrap-icons";
// import custom components
import SkillCourseCard from "../../../components/layout/cards/SkillCourseCard";
import BarronsIELTSImage from "../../../assets/images/app/bookcover/BarronsIELTS.png";
import Cambridge18Academic from "../../../assets/images/app/bookcover/Cambridge18-Academic.png";
import Makkar2022 from "../../../assets/images/app/bookcover/MakkarIELTS2022.png";
import CambridgeOfficial from "../../../assets/images/app/bookcover/Cambridge Official Guide.png";
import { Link } from "react-router-dom";

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
      <Row>
        <Col xl={12} md={12} xs={12}>
          <div className="mb-6 mb-lg-8 mt-5">
            <div>
              <h3 className="h2 fw-bold text-center">
                Explore our complete collection of books
              </h3>
              <Row className="my-3">
                {BooksData.map((item, index) => {
                  return (
                    <Col sm={6} xl={3} className="my-2" key={index}>
                      <Button
                        size="lg"
                        className="w-100"
                        as={Link}
                        to={item.href}
                      >
                        <Stack direction="horizontal" gap={1} className="ms-2">
                          <div>{item.title}</div>
                          <div className="ms-auto">{item.icon}</div>
                        </Stack>
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const BooksData = [
  {
    title: "Listening Books",
    icon: <Earbuds size={23} />,
    href: "/ieltstest/listening/",
  },
  {
    title: "Reading Books",
    icon: <Book size={23} />,
    href: "/ieltstest/reading/",
  },
  {
    title: "Writing Books",
    icon: <PencilSquare size={23} />,
    href: "/ieltstest/writing/",
  },
  {
    title: "Speaking Books",
    icon: <ChatLeftQuote size={23} />,
    href: "/ieltstest/speaking/",
  },
];

const SkillCoursesData = [
  {
    image: BarronsIELTSImage,
    title: "Barron's IELTS",
    rating: 4.6,
    votes: 31,
  },
  {
    image: Cambridge18Academic,
    title: "Cambridge 18",
    rating: 4.8,
    votes: 129,
  },
  {
    image: Makkar2022,
    title: "Makkar Speaking 2022",
    rating: 4.5,
    votes: 42,
  },
  {
    image: CambridgeOfficial,
    title: "Cambridge Official Guide",
    rating: 4.7,
    votes: 114,
  },
];

export default ExploreBooksCard;
