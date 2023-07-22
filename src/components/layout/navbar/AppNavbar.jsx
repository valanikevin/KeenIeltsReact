import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image, Navbar, Nav, Container, Form } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { v4 as uuid } from "uuid";
// import media files
import Logo from "../../../assets/images/brand/logo/logo.svg";
import NavDropdownMain from "./NavDropdownMain";
const AppNavbar = ({ headerstyle }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const login = true;
  const [expandedMenu, setExpandedMenu] = useState(false);

  const NavbarDefault = [
    {
      id: uuid(),
      menuitem: "Browse",
      link: "#",
      children: [
        {
          id: uuid(),
          menuitem: "Web Development",
          link: "#",
          children: [
            {
              id: uuid(),
              menuitem: "Bootstrap",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "React",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "GraphQl",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Gatsby",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Grunt",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Svelte",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Meteor",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "HTML5",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Angular",
              link: "/marketing/course-category/",
            },
          ],
        },
        {
          id: uuid(),
          menuitem: "Design",
          link: "#",
          children: [
            {
              id: uuid(),
              menuitem: "Graphic Design",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Illustrator",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "UX / UI Design",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Figma Design",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Adobe XD",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Sketch",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Icon Design",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Photoshop",
              link: "/marketing/course-category/",
            },
          ],
        },
        {
          id: uuid(),
          menuitem: "Mobile App",
          link: "/marketing/course-category/",
        },
        {
          id: uuid(),
          menuitem: "IT Software",
          link: "/marketing/course-category/",
        },
        {
          id: uuid(),
          menuitem: "Marketing",
          link: "/marketing/course-category/",
        },
        {
          id: uuid(),
          menuitem: "Music",
          link: "/marketing/course-category/",
        },
        {
          id: uuid(),
          menuitem: "Life Style",
          link: "/marketing/course-category/",
        },
        {
          id: uuid(),
          menuitem: "Business",
          link: "/marketing/course-category/",
        },
        {
          id: uuid(),
          menuitem: "Photography",
          link: "/marketing/course-category/",
        },
      ],
    },
    {
      id: uuid(),
      menuitem: "Landings",
      link: "#",
      children: [
        {
          id: uuid(),
          header: true,
          header_text: "LANDINGS",
        },
        {
          id: uuid(),
          menuitem: "Home Academy",
          link: "/marketing/landings/home-academy/",
        },
        {
          id: uuid(),
          menuitem: "Courses",
          link: "/marketing/landings/landing-courses/",
        },
        {
          id: uuid(),
          menuitem: "Lead Course",
          link: "/marketing/landings/course-lead/",
        },
        {
          id: uuid(),
          menuitem: "Request Access",
          link: "/marketing/landings/request-access/",
        },
        {
          id: uuid(),
          menuitem: "SaaS",
          link: "/marketing/landings/landing-sass/",
        },
        {
          id: uuid(),
          menuitem: "Job Listing",
          link: "/marketing/landings/landing-job/",
        },
      ],
    },
    {
      id: uuid(),
      menuitem: "Pages",
      link: "#",
      children: [
        {
          id: uuid(),
          menuitem: "Courses",
          link: "#",
          children: [
            {
              id: uuid(),
              menuitem: "Course Single",
              link: "/marketing/courses/course-single/",
            },
            {
              id: uuid(),
              menuitem: "Course Single v2",
              link: "/marketing/courses/course-single2/",
            },
            {
              id: uuid(),
              menuitem: "Course Resume",
              link: "/marketing/courses/course-resume/",
            },
            {
              id: uuid(),
              menuitem: "Course Category",
              link: "/marketing/course-category/",
            },
            {
              id: uuid(),
              menuitem: "Course Checkout",
              link: "/marketing/courses/course-checkout/",
            },
            {
              id: uuid(),
              menuitem: "Course List/Grid",
              link: "/marketing/courses/course-filter-page/",
            },
            {
              id: uuid(),
              menuitem: "Add New Course",
              link: "/marketing/instructor/add-new-course/",
            },
          ],
        },
        {
          id: uuid(),
          menuitem: "Paths",
          link: "#",
          children: [
            {
              id: uuid(),
              menuitem: "Browse Path",
              link: "/marketing/courses/course-path/",
            },
            {
              id: uuid(),
              menuitem: "Path Single",
              link: "/marketing/courses/course-path-single/",
            },
          ],
        },
        {
          id: uuid(),
          menuitem: "Blog",
          link: "#",
          children: [
            {
              id: uuid(),
              menuitem: "Listing",
              link: "/marketing/blog/listing/",
            },
            {
              id: uuid(),
              menuitem: "Article",
              link: "/marketing/blog/article-single/1",
            },
            {
              id: uuid(),
              menuitem: "Category",
              link: "/marketing/blog/category/",
            },
            {
              id: uuid(),
              menuitem: "Sidebar",
              link: "/marketing/blog/sidebar/",
            },
          ],
        },
        {
          id: uuid(),
          menuitem: "Career",
          link: "#",
          children: [
            {
              id: uuid(),
              menuitem: "Overview",
              link: "/marketing/pages/career/",
            },
            {
              id: uuid(),
              menuitem: "Listing",
              link: "/marketing/pages/career-list/",
            },
            {
              id: uuid(),
              menuitem: "Opening",
              link: "/marketing/pages/career-single/",
            },
          ],
        },
        {
          id: uuid(),
          menuitem: "Job",
          link: "#",
          children: [
            {
              id: uuid(),
              menuitem: "Home",
              link: "/marketing/landings/landing-job/",
            },
            {
              id: uuid(),
              menuitem: "List",
              link: "/marketing/jobs/listing/job-list/",
            },
            {
              id: uuid(),
              menuitem: "Grid",
              link: "/marketing/jobs/listing/job-list/",
            },
            {
              id: uuid(),
              menuitem: "Single",
              link: "/marketing/jobs/listing/helpdesk-software-engineer-web3crypto/",
            },
            {
              id: uuid(),
              menuitem: "Company List",
              link: "/marketing/jobs/company-list/",
            },
            {
              id: uuid(),
              menuitem: "Company Single",
              link: "/marketing/jobs/company/about/",
            },
          ],
        },
        {
          id: uuid(),
          menuitem: "Specialty",
          link: "#",
          children: [
            {
              id: uuid(),
              menuitem: "Coming Soon",
              link: "/marketing/specialty/coming-soon/",
            },
            {
              id: uuid(),
              menuitem: "Error 404",
              link: "/marketing/specialty/404-error/",
            },
            {
              id: uuid(),
              menuitem: "Maintenance Mode",
              link: "/marketing/specialty/maintenance-mode/",
            },
            {
              id: uuid(),
              menuitem: "Terms & Conditions",
              link: "/marketing/specialty/terms-and-conditions/",
            },
          ],
        },
        {
          id: uuid(),
          divider: true,
        },
        {
          id: uuid(),
          menuitem: "About",
          link: "/marketing/pages/about/",
        },
        {
          id: uuid(),
          menuitem: "Help Center",
          link: "#",
          children: [
            {
              id: uuid(),
              menuitem: "Help Center",
              link: "/marketing/help-center/",
            },
            {
              id: uuid(),
              menuitem: "FAQ's",
              link: "/marketing/help-center/faq/",
            },
            {
              id: uuid(),
              menuitem: "Guide",
              link: "/marketing/help-center/guide/",
            },
            {
              id: uuid(),
              menuitem: "Guide Single",
              link: "/marketing/help-center/guide-single/getting-started/what-is-this-geeks-app",
            },
            {
              id: uuid(),
              menuitem: "Support",
              link: "/marketing/help-center/support/",
            },
          ],
        },
        {
          id: uuid(),
          menuitem: "Pricing",
          link: "/marketing/pages/pricing/",
        },
        {
          id: uuid(),
          menuitem: "Compare Plan",
          link: "/marketing/pages/compare-plan/",
        },
        {
          id: uuid(),
          menuitem: "Contact",
          link: "/marketing/pages/contact/",
        },
      ],
    },
    {
      id: uuid(),
      menuitem: "Accounts",
      link: "#",
      children: [
        {
          id: uuid(),
          header: true,
          header_text: "Accounts",
        },
        {
          id: uuid(),
          menuitem: "Instructor",
          link: "#",
          children: [
            {
              id: uuid(),
              header: true,
              header_text: "Instructor",
              description:
                "Instructor dashboard for manage courses and earning.",
            },
            {
              id: uuid(),
              divider: true,
            },
            {
              id: uuid(),
              menuitem: "Dashboard",
              link: "/marketing/instructor/dashboard/",
            },
            {
              id: uuid(),
              menuitem: "Profile",
              link: "/marketing/instructor/instructor-profile/",
            },
            {
              id: uuid(),
              menuitem: "My Courses",
              link: "/marketing/instructor/instructor-my-courses/",
            },
            {
              id: uuid(),
              menuitem: "Orders",
              link: "/marketing/instructor/instructor-orders/",
            },
            {
              id: uuid(),
              menuitem: "Reviews",
              link: "/marketing/instructor/instructor-reviews/",
            },
            {
              id: uuid(),
              menuitem: "Students",
              link: "/marketing/instructor/instructor-students/",
            },
            {
              id: uuid(),
              menuitem: "Payouts",
              link: "/marketing/instructor/instructor-payouts/",
            },
            {
              id: uuid(),
              menuitem: "Earning",
              link: "/marketing/instructor/instructor-earnings/",
            },
            {
              id: uuid(),
              menuitem: "Quiz",
              link: "#",
              children: [
                {
                  id: uuid(),
                  menuitem: "Quiz",
                  link: "/marketing/instructor/quiz/",
                },
                {
                  id: uuid(),
                  menuitem: "Single",
                  link: "/marketing/instructor/quiz/single/",
                },
                {
                  id: uuid(),
                  menuitem: "Result",
                  link: "/marketing/instructor/quiz/result/",
                },
              ],
            },
          ],
        },
        {
          id: uuid(),
          menuitem: "Students",
          link: "#",
          children: [
            {
              id: uuid(),
              header: true,
              header_text: "Students",
              description:
                "Students dashboard to manage your courses and subscriptions.",
            },
            {
              id: uuid(),
              divider: true,
            },
            {
              id: uuid(),
              menuitem: "Dashboard",
              link: "/marketing/student/dashboard/",
            },
            {
              id: uuid(),
              menuitem: "Subscriptions",
              link: "/marketing/student/student-subscriptions/",
            },
            {
              id: uuid(),
              menuitem: "Payments",
              link: "/marketing/student/student-payment/",
            },
            {
              id: uuid(),
              menuitem: "Billing Info",
              link: "/marketing/student/student-billing-info/",
            },
            {
              id: uuid(),
              menuitem: "Invoice",
              link: "/marketing/student/student-invoice/",
            },
            {
              id: uuid(),
              menuitem: "Invoice Details",
              link: "/marketing/student/student-invoice-details/",
            },
            {
              id: uuid(),
              menuitem: "Bookmarked",
              link: "/marketing/student/dashboard/",
            },
            {
              id: uuid(),
              menuitem: "My Path",
              link: "/marketing/student/dashboard/",
            },
            {
              id: uuid(),
              menuitem: "Quiz",
              link: "#",
              children: [
                {
                  id: uuid(),
                  menuitem: "Quiz",
                  link: "/marketing/student/quiz/",
                },
                {
                  id: uuid(),
                  menuitem: "Attempt",
                  link: "/marketing/student/quiz/attempt/",
                },
                {
                  id: uuid(),
                  menuitem: "Start",
                  link: "/marketing/student/quiz/start/",
                },
                {
                  id: uuid(),
                  menuitem: "Result",
                  link: "/marketing/student/quiz/result/",
                },
              ],
            },
          ],
        },
        {
          id: uuid(),
          menuitem: "Admin",
          link: "#",
          children: [
            {
              id: uuid(),
              header: true,
              header_text: "Master Admin",
              description:
                "Master admin dashboard to manage courses, user, site setting, and work with amazing apps.",
            },
            {
              id: uuid(),
              divider: true,
            },
            {
              id: uuid(),
              menuitem: "Go to Dashboard",
              link: "/dashboard/overview/",
              type: "button",
            },
          ],
        },
        {
          id: uuid(),
          divider: true,
        },
        {
          id: uuid(),
          menuitem: "Sign In",
          link: "/authentication/sign-in/",
        },
        {
          id: uuid(),
          menuitem: "Sign Up",
          link: "/authentication/sign-up/",
        },
        {
          id: uuid(),
          menuitem: "Forgot Password",
          link: "/authentication/forget-password/",
        },
        {
          id: uuid(),
          menuitem: "Edit Profile",
          link: "/marketing/student/student-edit-profile/",
        },
        {
          id: uuid(),
          menuitem: "Security",
          link: "/marketing/student/student-security/",
        },
        {
          id: uuid(),
          menuitem: "Social Profiles",
          link: "/marketing/student/student-social-profiles/",
        },
        {
          id: uuid(),
          menuitem: "Notifications",
          link: "/marketing/student/student-notifications/",
        },
        {
          id: uuid(),
          menuitem: "Privacy Settings",
          link: "/marketing/student/student-profile-privacy/",
        },
        {
          id: uuid(),
          menuitem: "Delete Profile",
          link: "/marketing/student/student-delete-profile/",
        },
        {
          id: uuid(),
          menuitem: "Linked Accounts",
          link: "/marketing/student/student-linked-accounts/",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar
        onToggle={(collapsed) => setExpandedMenu(collapsed)}
        expanded={expandedMenu}
        expand="lg"
        className="navbar p-2 navbar-default py-2"
      >
        <Container fluid className="px-0 ps-2">
          <Navbar.Brand as={Link} to="/">
            <Image src={Logo} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="icon-bar top-bar mt-0"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {NavbarDefault.map((item, index) => {
                if (item.children === undefined) {
                  return (
                    <Nav.Link key={index} as={Link} to={item.link}>
                      {item.menuitem}
                    </Nav.Link>
                  );
                } else {
                  return (
                    <NavDropdownMain
                      item={item}
                      key={index}
                      onClick={(value) => setExpandedMenu(value)}
                    />
                  );
                }
              })}
              {/* <DocumentMenu /> */}
            </Nav>
            {/* Search Form */}
            <Form className="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center">
              <span className="position-absolute ps-3 search-icon">
                <i className="fe fe-search"></i>
              </span>
              <Form.Control
                type="Search"
                id="formSearch"
                className="ps-6"
                placeholder="Search Courses"
              />
            </Form>
            {/* Right side quick / shortcut menu  */}
            <Nav className="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap">
              <span className={`ms-auto mt-1  ${login ? "d-none" : ""}`}>
                <Nav.Link
                  as={Link}
                  to="#"
                  bsPrefix="btn"
                  className="btn btn-white shadow-sm me-2"
                >
                  Sign In
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="#"
                  bsPrefix="btn"
                  className="btn btn-primary shadow-sm"
                >
                  Sign Up
                </Nav.Link>
              </span>

              <span
                className={`${
                  login
                    ? isDesktop || isLaptop
                      ? "d-flex"
                      : "d-none"
                    : "d-none"
                }`}
              ></span>
            </Nav>
            {/* end of right side quick / shortcut menu  */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
