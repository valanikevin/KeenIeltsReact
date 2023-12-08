import React, { Fragment, useState } from "react";
import {
  Col,
  Row,
  Container,
  Nav,
  Card,
  Tab,
  ListGroup,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// import popup youtube video
import ModalVideo from "react-modal-video";

// import custom components
import GKAccordionDefault from "../../components/layout/BookHomePage/accordions/GKAccordionDefault";
import Ratings from "../../components/layout/BookHomePage/ratings/Ratings";
import GKTippy from "../../components/layout/BookHomePage/tooltips/GKTippy";

// import sub components
import CourseCard from "../../components/layout/BookHomePage/CourseCard";

// import sub components tabs
import ReviewsTab from "../../components/layout/BookHomePage/ReviewsTab";
import DescriptionTab from "../../components/layout/BookHomePage/DescriptionTab";
import TranscriptTab from "../../components/layout/BookHomePage/TranscriptTab";
import FAQTab from "../../components/layout/BookHomePage/FAQTab";

// import media files
import CheckedMark from "../../assets/images/svg/checked-mark.svg";
import CourseJavascript from "../../assets/images/course/course-javascript.jpg";
import Avatar1 from "../../assets/images/avatar/avatar-1.jpg";

import { AllCoursesData } from "../../components/layout/BookHomePage/AllCoursesData";

const BookHomePage = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState("JRzWRZahOVU");

  return (
    <>
      <section className="pt-lg-8 pb-lg-16 pt-8 pb-12 bg-primary">
        <Container>
          <Row className="align-items-center">
            <Col xl={7} lg={7} md={12} sm={12}>
              <div>
                <h1 className="text-white display-4 fw-semi-bold">
                  Getting Started with JavaScript
                </h1>
                <p className="text-white mb-6 lead">
                  JavaScript is the popular programming language which powers
                  web pages and web applications. This course will get you
                  started coding in JavaScript.
                </p>
                <div className="d-flex align-items-center">
                  <GKTippy content="Add to Bookmarks">
                    <Link
                      to="#"
                      className="bookmark text-white text-decoration-none"
                    >
                      <i className="fe fe-bookmark text-white-50 me-2"></i>
                      Bookmark
                    </Link>
                  </GKTippy>
                  <span className="text-white ms-3">
                    <i className="fe fe-user text-white-50"></i> 1200 Enrolled{" "}
                  </span>
                  <span className="ms-4">
                    <span className="text-warning">
                      <Ratings rating={4.5} />
                      <span className="text-white ms-1">(140)</span>
                    </span>
                  </span>
                  <span className="text-white ms-4 d-none d-md-block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="8"
                        width="2"
                        height="6"
                        rx="1"
                        fill="#DBD8E9"
                      ></rect>
                      <rect
                        x="7"
                        y="5"
                        width="2"
                        height="9"
                        rx="1"
                        fill="#DBD8E9"
                      ></rect>
                      <rect
                        x="11"
                        y="2"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#DBD8E9"
                      ></rect>
                    </svg>{" "}
                    <span className="align-middle">Intermediate</span>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Page content */}
      <section className="pb-10">
        <Container>
          <Row>
            <Col lg={4} md={12} sm={12} className="mt-n8 mb-4 mb-lg-0">
              {/* Card */}
              <Card className="mb-3 mb-4">
                <div className="p-1">
                  <div
                    className="d-flex justify-content-center position-relative rounded py-10 border-white border rounded-3 bg-cover"
                    style={{
                      background: `url(${CourseJavascript})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                    }}
                  >
                    <Link
                      to="#"
                      className="popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none"
                      onClick={() => setOpen(true)}
                    >
                      <i className="fe fe-play"></i>
                    </Link>
                  </div>
                </div>
                {/* video popup */}
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId={YouTubeURL}
                  onClose={() => setOpen(false)}
                />
                {/* end of video popup */}

                {/* Card body */}
                <Card.Body>
                  {/* Price single page */}
                  <div className="mb-3">
                    <span className="text-dark fw-bold h2 me-2">$600</span>
                    <del className="fs-4 text-muted">$750</del>
                  </div>
                  <div className="d-grid">
                    <Link to="#" className="btn btn-primary mb-2  ">
                      Start Free Month
                    </Link>
                    <Link
                      to="/marketing/pages/pricing/"
                      className="btn btn-outline-primary"
                    >
                      Get Full Access
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={8} md={12} sm={12} className="mt-n8 mb-4 mb-lg-0">
              <Tab.Container defaultActiveKey="contents">
                <Card>
                  <Nav className="nav-lb-tab">
                    {["Contents", "Description", "Tests", "Your Attempts"].map(
                      (item, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link
                            href={`#${item.toLowerCase()}`}
                            eventKey={item.toLowerCase()}
                            className="mb-sm-3 mb-md-0"
                          >
                            {item}
                          </Nav.Link>
                        </Nav.Item>
                      )
                    )}
                  </Nav>
                  <Card.Body className="p-0">
                    <Tab.Content>
                      <Tab.Pane eventKey="contents" className="pb-4 pt-3 px-4">
                        {/* Course Index Accordion */}
                        <GKAccordionDefault
                          accordionItems={CourseIndex}
                          itemClass="px-0"
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="description" className="pb-4 p-4">
                        {/* Description */}
                        <DescriptionTab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="reviews" className="pb-4 p-4">
                        {/* Reviews */}
                        <ReviewsTab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="transcript" className="pb-4 p-4">
                        {/* Transcript */}
                        <TranscriptTab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="faq" className="pb-4 p-4">
                        {/* FAQ */}
                        <FAQTab />
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

const CourseIndex = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    total_videos: 4,
    total_duratoin: "1 hour and 17 minutes",
    completed: 5, // Percent
    topics: [
      {
        id: 1,
        topic: "Introduction",
        duratoin: "1m 7s",
        status: "finished",
        locked: false,
      },
      {
        id: 2,
        topic: "Installing Development Software",
        duratoin: "3m 11s",
        status: "continue",
        locked: false,
      },
      {
        id: 3,
        topic: "Hello World Project from GitHub",
        duratoin: "2m 33s",
        status: "pending",
        locked: false,
      },
      {
        id: 3,
        topic: "Our Sample Website",
        duratoin: "2m 15s",
        status: "pending",
        locked: true,
      },
    ],
  },
  {
    id: 2,
    title: "JavaScript Beginning",
    total_videos: 8,
    total_duratoin: "34 minutes",
    completed: 0, // Percent
    topics: [
      {
        id: 1,
        topic: "Introduction",
        duratoin: "1m 41s",
        status: "pending",
        locked: true,
      },
      {
        id: 2,
        topic: "Adding JavaScript Code to a Web Page",
        duratoin: "3m 39s",
        status: "pending",
        locked: true,
      },
      {
        id: 3,
        topic: "Working with JavaScript Files",
        duratoin: "6m 18s",
        status: "pending",
        locked: true,
      },
      {
        id: 4,
        topic: "Formatting Code",
        duratoin: "2m 18s",
        status: "pending",
        locked: true,
      },
      {
        id: 5,
        topic: "Detecting and Fixing Errors",
        duratoin: "3m 14s",
        status: "pending",
        locked: true,
      },
      {
        id: 6,
        topic: "Case Sensitivity",
        duratoin: "1m 48s",
        status: "pending",
        locked: true,
      },
      {
        id: 7,
        topic: "Commenting Code",
        duratoin: "2m 24s",
        status: "pending",
        locked: true,
      },
      {
        id: 8,
        topic: "Summary",
        duratoin: "2m 14s",
        status: "pending",
        locked: true,
      },
    ],
  },
  {
    id: 3,
    title: "Variables and Constants",
    total_videos: 10,
    total_duratoin: "3 hour and 24 minutes",
    completed: 0, // Percent
    topics: [
      {
        id: 1,
        topic: "Introduction",
        duratoin: "1m 19s",
        status: "pending",
        locked: true,
      },
      {
        id: 2,
        topic: "What Is a Variable?",
        duratoin: "2m 11s",
        status: "pending",
        locked: true,
      },
      {
        id: 3,
        topic: "Declaring Variables",
        duratoin: "2m 30s",
        status: "pending",
        locked: true,
      },
      {
        id: 4,
        topic: "Using let to Declare Variables",
        duratoin: "3m 28s",
        status: "pending",
        locked: true,
      },
      {
        id: 5,
        topic: "Naming Variables",
        duratoin: "3m 14s",
        status: "pending",
        locked: true,
      },
      {
        id: 6,
        topic: "Common Errors Using Variables",
        duratoin: "3m 30s",
        status: "pending",
        locked: true,
      },
      {
        id: 7,
        topic: "Changing Variable Values",
        duratoin: "2m 4s",
        status: "pending",
        locked: true,
      },
      {
        id: 8,
        topic: "Constants",
        duratoin: "3m 15s",
        status: "pending",
        locked: true,
      },
      {
        id: 9,
        topic: "The var Keyword",
        duratoin: "2m 20s",
        status: "pending",
        locked: true,
      },
      {
        id: 10,
        topic: "Summary",
        duratoin: "1m 49s",
        status: "pending",
        locked: true,
      },
    ],
  },
  {
    id: 4,
    title: "Program Flow",
    total_videos: 11,
    total_duratoin: "2 hour and 10 minutes",
    completed: 0, // Percent
    topics: [
      {
        id: 1,
        topic: "Introduction",
        duratoin: "1m 52s",
        status: "pending",
        locked: true,
      },
      {
        id: 2,
        topic: "Clip Watched",
        duratoin: "4m 27s",
        status: "pending",
        locked: true,
      },
      {
        id: 3,
        topic: "Conditionals Using if()",
        duratoin: "4m 25s",
        status: "pending",
        locked: true,
      },
      {
        id: 4,
        topic: "Truthy and Falsy",
        duratoin: "3m 30s",
        status: "pending",
        locked: true,
      },
      {
        id: 5,
        topic: "if ... else",
        duratoin: "3m 30s",
        status: "pending",
        locked: true,
      },
      {
        id: 6,
        topic: "Comparing === and ==",
        duratoin: "1m 52s",
        status: "pending",
        locked: true,
      },
      {
        id: 7,
        topic: "The Ternary Operator",
        duratoin: "2m 47s",
        status: "pending",
        locked: true,
      },
      {
        id: 8,
        topic: "Block Scope Using let",
        duratoin: "2m 21s",
        status: "pending",
        locked: true,
      },
      {
        id: 9,
        topic: "Looping with for()",
        duratoin: "5m 30s",
        status: "pending",
        locked: true,
      },
      {
        id: 10,
        topic: "Looping with do ... while()",
        duratoin: "1m 58s",
        status: "pending",
        locked: true,
      },
      {
        id: 11,
        topic: "Summary",
        duratoin: "2m 21s",
        status: "pending",
        locked: true,
      },
    ],
  },
  {
    id: 5,
    title: "Functions",
    total_videos: 8,
    total_duratoin: "4 hour and 38 minutes",
    completed: 0, // Percent
    topics: [
      {
        id: 1,
        topic: "Introduction",
        duratoin: "1m 52s",
        status: "pending",
        locked: true,
      },
      {
        id: 2,
        topic: "Function Basics",
        duratoin: "2m 46s",
        status: "pending",
        locked: true,
      },
      {
        id: 3,
        topic: "Function Expressions",
        duratoin: "2m 32s",
        status: "pending",
        locked: true,
      },
      {
        id: 4,
        topic: "Passing Information to Functions",
        duratoin: "3m 19s",
        status: "pending",
        locked: true,
      },
      {
        id: 5,
        topic: "Function Return Values",
        duratoin: "3m 13s",
        status: "pending",
        locked: true,
      },
      {
        id: 6,
        topic: "Function Scope",
        duratoin: "4m 20s",
        status: "pending",
        locked: true,
      },
      {
        id: 7,
        topic: "Using Functions to Modify Web Pages",
        duratoin: "3m 42s",
        status: "pending",
        locked: true,
      },
      {
        id: 8,
        topic: "Summary",
        duratoin: "2m 3s",
        status: "pending",
        locked: true,
      },
    ],
  },
  {
    id: 6,
    title: "Objects and the DOM",
    total_videos: 10,
    total_duratoin: "2 hour and 10 minutes",
    completed: 0, // Percent
    topics: [
      {
        id: 1,
        topic: "Introduction",
        duratoin: "1m 48s",
        status: "pending",
        locked: true,
      },
      {
        id: 2,
        topic: "Object Properties",
        duratoin: "4m 28s",
        status: "pending",
        locked: true,
      },
      {
        id: 3,
        topic: "Object Methods",
        duratoin: "3m 3s",
        status: "pending",
        locked: true,
      },
      {
        id: 4,
        topic: "Passing Objects to Functions",
        duratoin: "3m 27s",
        status: "pending",
        locked: true,
      },
      {
        id: 5,
        topic: "Standard Built-in Objects",
        duratoin: "6m 55s",
        status: "pending",
        locked: true,
      },
      {
        id: 6,
        topic: "The Document Object Model (DOM)",
        duratoin: "3m 29s",
        status: "pending",
        locked: true,
      },
      {
        id: 7,
        topic: "Styling DOM Elements",
        duratoin: "2m 42s",
        status: "pending",
        locked: true,
      },
      {
        id: 8,
        topic: "Detecting Button Clicks",
        duratoin: "2m 3s",
        status: "pending",
        locked: true,
      },
      {
        id: 9,
        topic: "Showing and Hiding DOM Elements",
        duratoin: "4m 37s",
        status: "pending",
        locked: true,
      },
      {
        id: 10,
        topic: "Summary",
        duratoin: "2m 47s",
        status: "pending",
        locked: true,
      },
    ],
  },
  {
    id: 7,
    title: "Arrays",
    total_videos: 8,
    total_duratoin: "1 hour and 5 minutes",
    completed: 0, // Percent
    topics: [
      {
        id: 1,
        topic: "Introduction",
        duratoin: "1m 48s",
        status: "pending",
        locked: true,
      },
      {
        id: 2,
        topic: "Creating and Initializing Arrays",
        duratoin: "4m 7s",
        status: "pending",
        locked: true,
      },
      {
        id: 3,
        topic: "Accessing Array Items",
        duratoin: "2m 4s",
        status: "pending",
        locked: true,
      },
      {
        id: 4,
        topic: "Manipulating Arrays",
        duratoin: "4m 3s",
        status: "pending",
        locked: true,
      },
      {
        id: 5,
        topic: "slice() and splice()",
        duratoin: "5m 54s",
        status: "pending",
        locked: true,
      },
      {
        id: 6,
        topic: "Array Searching and Looping",
        duratoin: "7m 32s",
        status: "pending",
        locked: true,
      },
      {
        id: 7,
        topic: "Arrays in the DOM ",
        duratoin: "4m 11s",
        status: "pending",
        locked: true,
      },
      {
        id: 8,
        topic: "Summary",
        duratoin: "2m 28s",
        status: "pending",
        locked: true,
      },
    ],
  },
  {
    id: 8,
    title: "Scope and Hoisting",
    total_videos: 7,
    total_duratoin: "3 hour and 15 minutes",
    completed: 0, // Percent
    topics: [
      {
        id: 1,
        topic: "Introduction",
        duratoin: "1m 20s",
        status: "pending",
        locked: true,
      },
      {
        id: 2,
        topic: "Global Scope",
        duratoin: "4m 7s",
        status: "pending",
        locked: true,
      },
      {
        id: 3,
        topic: "Clip Watched",
        duratoin: "3m 14s",
        status: "pending",
        locked: true,
      },
      {
        id: 4,
        topic: "Function Scope",
        duratoin: "3m 45s",
        status: "pending",
        locked: true,
      },
      {
        id: 5,
        topic: "Var and Hoisting",
        duratoin: "2m 21s",
        status: "pending",
        locked: true,
      },
      {
        id: 6,
        topic: "Undeclared Variables and Strict Mode",
        duratoin: "2m 16s",
        status: "pending",
        locked: true,
      },
      {
        id: 7,
        topic: "Summary",
        duratoin: "1m 33s",
        status: "pending",
        locked: true,
      },
    ],
  },
  {
    id: 9,
    title: "Summary",
    total_videos: 1,
    total_duratoin: "5 minutes",
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repudiandae esse velit eos sunt ab inventore est tenetur blanditiis? 
        Voluptas eius molestiae ad itaque tempora nobis minima eveniet aperiam molestias, 
        maiores natus expedita dolores ea non possimus magnam corrupt i quas rem unde quo 
        enim porro culpa! Quaerat veritatis veniam corrupti iusto.`,
    topics: [], // It's compulsary to show summary, because it's used for conditional rendering
  },
];

export default BookHomePage;
