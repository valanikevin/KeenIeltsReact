import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image, Navbar, Nav, Container, Form } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { v4 as uuid } from "uuid";
// import media files
import Logo from "../../../assets/images/brand/logo/logo.svg";
import NavDropdownMain from "./NavDropdownMain";
import AuthContext from "../../../utils/AuthContext";
const AppNavbar = ({ headerstyle }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [expandedMenu, setExpandedMenu] = useState(false);
  let { user, logoutUser } = useContext(AuthContext);
  const login = user ? true : false;

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
          ],
        },

        {
          id: uuid(),
          menuitem: "Mobile App",
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
                  to={"/login"}
                  bsPrefix="btn"
                  className="btn btn-white shadow-sm me-2"
                >
                  Sign In
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/register"}
                  bsPrefix="btn"
                  className="btn btn-primary shadow-sm"
                >
                  Sign Up
                </Nav.Link>
              </span>

              <span className={`ms-auto mt-1  ${!login ? "d-none" : ""}`}>
                <Nav.Link
                  as={Link}
                  onClick={(e) => {
                    logoutUser(e);
                  }}
                  bsPrefix="btn"
                  className="btn btn-primary shadow-sm"
                >
                  Logout
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
