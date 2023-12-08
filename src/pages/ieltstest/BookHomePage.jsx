import React, { Fragment, useEffect, useState } from "react";
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

const BookHomePage = () => {
  const book_slug = useParams().book_slug;
  const [book, setBook] = useState(null);
  const api = usePublicAxios();

  function getBook() {
    api.get("ieltstest/book/" + book_slug + "/").then((response) => {
      if (response.status === 200) {
        setBook(response.data);
      } else {
        console.log(response);
      }
    });
  }

  useEffect(() => {
    getBook();
  }, []);

  if (!book) {
    return <div>Loading...</div>;
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
          <Row>
            <Col xs={6} md={2} className="mb-2">
              <span className="text-white">
                <FiUpload className="text-white-50" />
                <span className="px-2 text-capitalize">EEC India</span>
              </span>
            </Col>

            <Col xs={6} md={2} className="mb-2">
              <span className="text-white">
                <MdCopyright className="text-white-50" />

                <span className="px-2 text-capitalize">{book.copyright}</span>
              </span>
            </Col>

            <Col xs={6} md={2} className="mb-2">
              <span className="text-white ">
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
            <Col lg={4} md={12} sm={12} className="mt-n10 mb-4 mb-lg-0">
              {/* Card */}
              <Card className="mb-3 mb-4">
                <div className="p-1">
                  <img src={book.cover} className="w-100" />
                </div>

                {/* Card body */}
                <Card.Body>
                  <div className="d-grid">
                    <Link to="#" className="btn btn-primary mb-2  ">
                      Start Full Test
                    </Link>
                  </div>
                </Card.Body>
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
                      <Tab.Pane eventKey="tests" className="pb-4 pt-3 px-4">
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

                      <Tab.Pane
                        eventKey="your attempts"
                        className="pb-4 p-4"
                      ></Tab.Pane>
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
