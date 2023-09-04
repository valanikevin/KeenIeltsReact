import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Image, Navbar, Nav, Container, Form } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { v4 as uuid } from "uuid";
// import media files
import Logo from "../../../assets/images/brand/logo/logo.svg";
import NavDropdownMain from "./NavDropdownMain";
import AuthContext from "../../../context/AuthContext";
import QuickMenu from "./QuickMenu";
import TakeTestDropdown from "./TakeTestDropdown";

const AppNavbar = ({ fixed = false }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [expandedMenu, setExpandedMenu] = useState(false);
  let { user, logoutUser } = useContext(AuthContext);
  const login = user ? true : false;

  const NavbarDefaultRoutes = [
    {
      id: uuid(),
      menuitem: "Dashboard",
      link: "#",
      // children: [
      //   {
      //     id: uuid(),
      //     menuitem: "Your Dashboard",
      //     link: "/dashboard/",
      //   },
      //   {
      //     id: uuid(),
      //     menuitem: "Your Performance",
      //     link: "/performance/",
      //   },
      // ],
    },
    {
      id: uuid(),
      menuitem: "Leaderboard",
      link: "#",
      children: [
        {
          id: uuid(),
          menuitem: "Leaderboard",
          link: "/leaderboard/",
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
        className="navbar-default"
        bg="white"
        fixed={`${fixed && "top"}`}
      >
        <Container fluid className="px-0 ps-2">
          <div className="d-flex">
            <Navbar.Brand as={Link} to="/">
              <Image src={Logo} alt="" />
            </Navbar.Brand>
            <TakeTestDropdown />
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="icon-bar top-bar mt-0"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {NavbarDefaultRoutes.map((item, index) => {
                if (item.children === undefined) {
                  return (
                    <div className="nav-item" key={index}>
                      <Nav.Link as={Link} to={item.link}>
                        {item.menuitem}
                      </Nav.Link>
                    </div>
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
            </Nav>

            {/* Right side quick / shortcut menu  */}
            <div className="ms-auto mt-3 mt-lg-0">
              <div className="d-flex align-items-center">
                {user ? (
                  <>
                    <QuickMenu />
                    <Link
                      onClick={() => {
                        logoutUser();
                        setExpandedMenu(false);
                      }}
                      className="btn btn-dark ms-3"
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login/"
                      onClick={(value) => setExpandedMenu(false)}
                      className="btn btn-outline-dark ms-3"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/register/"
                      onClick={(value) => setExpandedMenu(false)}
                      className="btn btn-dark ms-1"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
            {/* end of right side quick / shortcut menu  */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
