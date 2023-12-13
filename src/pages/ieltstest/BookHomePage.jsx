import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Col,
  Row,
  Container,
  Nav,
  Card,
  Tab,
  Accordion,
  Table,
  Button,
  Stack,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import { FiKey, FiUpload } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";
import usePublicAxios from "../../utils/usePublicAxios";
import useAxios from "../../utils/useAxios";
import YourRecentTestsCard from "../../components/layout/student/YourRecentTestsCard";
import AuthContext from "../../context/AuthContext";
import useGetSmartTest from "../../components/ieltstest/GetSmartTest";
import BookHomePageLoader from "../../components/layout/BookHomePage/BookHomePageLoader";
import TestTypeSwitch from "../../components/ieltstest/TestTypeSwitch";
import TestTypeContext from "../../context/TestTypeContext";

const BookHomePage = () => {
  const book_slug = useParams().book_slug;
  const [book, setBook] = useState(null);
  const [attempts, setAttempts] = useState(null);
  const api_public = usePublicAxios();
  const api = useAxios();
  const [testType, setTestType] = useContext(TestTypeContext);
  let { registerUser, registrationError, user } = useContext(AuthContext);
  const getSmartTest = useGetSmartTest();

  useEffect(() => {
    if (book) {
      document.title =
        book.name + " | Practice Real IELTS Tests for Free | KeenIELTS";
    }
  }, [book]);

  function getBook() {
    api_public
      .get("ieltstest/book/" + book_slug + "/", {
        params: {
          // Use the `params` key to include query parameters
          testType: testType,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setBook(response.data);
        } else {
          console.log(response);
        }
      });
  }

  function getAttempts() {
    api
      .post("student/get_attempts_from_book/" + book_slug + "/")
      .then((response) => {
        if (response.status === 200) {
          setAttempts(response.data);
        } else {
          console.log(response);
        }
      });
  }

  useEffect(() => {
    if (testType) {
      getBook();
      if (user) {
        getAttempts();
      }
    }
  }, [testType]);

  if (!book || (user && !attempts)) {
    return <BookHomePageLoader />;
  }

  const modules_items = [
    "listening_module",
    "reading_module",
    "writing_module",
    "speaking_module",
  ];

  return (
    <>
      <section className="pt-lg-8 pb-lg-16 pt-8 pb-12 bg-primary">
        <Container>
          <Row className="align-items-center">
            <Col xl={7} lg={7} md={12} sm={12}>
              <div>
                <h1 className="text-white display-4 fw-semi-bold">
                  {book.name}
                </h1>
                <p className="text-white mb-4 lead">{book.description}</p>
                <div className="d-flex align-items-center"></div>
              </div>
            </Col>
          </Row>

          <Row className="gy-3 gy-lg-0">
            {/* Adjust column sizes and add gutters */}
            <Col xs={12} className="mb-2  text-md-start">
              <span className="text-white">
                <FiUpload className="text-white-50" />
                <span className="px-2 text-capitalize">
                  {book.institute.name}
                </span>
              </span>
            </Col>

            <Col xs={12} className="mb-2  text-md-start">
              <span className="text-white">
                <MdCopyright className="text-white-50" />
                <span className="px-2 text-capitalize">{book.copyright}</span>
              </span>
            </Col>

            <Col xs={12} className="mb-2  text-md-start">
              <span className="text-white">
                <FiKey className="text-white-50" />
                <span className="px-2 text-capitalize">{book.difficulty}</span>
              </span>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Page content */}
      <section className="pb-10">
        <Container>
          <Row>
            <Col lg={4} md={12} sm={12} className="mt-n10 mb-9 mb-lg-0">
              {/* Card */}
              <Card className=" mb-4">
                <div className="p-1 ">
                  <img src={book.cover} className="w-100 border-bottom" />
                </div>

                {/* Card body */}
                <Card.Body className="py-2">
                  <div className="  ">
                    <TestTypeSwitch />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="d-grid ">
                    <Button
                      className="btn btn-primary mb-2"
                      onClick={() => {
                        getSmartTest("fulltest", book_slug, "");
                      }}
                    >
                      Start Full Test
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={8} md={12} sm={12} className="mt-n10 mb-4 mb-lg-0">
              <Tab.Container defaultActiveKey="tests">
                <Card>
                  <Nav className="nav-lb-tab">
                    {["Tests", "Your Attempts"].map((item, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link
                          eventKey={item.toLowerCase()}
                          className="mb-sm-3 mb-md-0"
                        >
                          {item}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Card.Body className="p-0">
                    <Tab.Content>
                      <Tab.Pane eventKey="tests" className="my-2">
                        <Accordion defaultActiveKey={0} flush>
                          {book.tests.map((item, index) => (
                            <Accordion.Item eventKey={index} key={index}>
                              <Accordion.Header className="">
                                <span className="text-black fw-bold">
                                  {item.name}
                                </span>
                              </Accordion.Header>
                              <Accordion.Body className="p-0">
                                <Table striped className="text-nowrap">
                                  <tbody>
                                    {modules_items.map((module, index) =>
                                      item[module].map(
                                        (module_item, moduleIndex) => (
                                          <tr key={`${index}-${moduleIndex}`}>
                                            <td>
                                              <Stack
                                                direction="horizontal"
                                                gap={1}
                                              >
                                                <div>{module_item.name}</div>{" "}
                                                {/* Replace this with actual data if needed */}
                                                <div className="ms-auto">
                                                  <Button
                                                    className="btn-sm "
                                                    variant={
                                                      module.split("_")[0]
                                                    }
                                                    onClick={() => {
                                                      getSmartTest(
                                                        module.split("_")[0],
                                                        book_slug,
                                                        item.slug
                                                      );
                                                    }}
                                                  >
                                                    Start Test
                                                  </Button>
                                                </div>
                                              </Stack>
                                            </td>
                                          </tr>
                                        )
                                      )
                                    )}
                                  </tbody>
                                </Table>
                              </Accordion.Body>
                            </Accordion.Item>
                          ))}
                        </Accordion>
                      </Tab.Pane>

                      <Tab.Pane eventKey="your attempts" className="my-2">
                        {user ? (
                          <YourRecentTestsCard tests={attempts} />
                        ) : (
                          <div className="text-center p-4">
                            <h3>
                              Please sign in or create an account to view your
                              test attempts.
                            </h3>
                            <div className="mt-3">
                              <Link to="/login/" className="btn btn-primary ">
                                Sign in
                              </Link>
                              <Link
                                to="/register/"
                                className="btn btn-outline-primary  ms-2"
                              >
                                Create Account
                              </Link>
                            </div>
                          </div>
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Card.Body>
                </Card>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BookHomePage;
