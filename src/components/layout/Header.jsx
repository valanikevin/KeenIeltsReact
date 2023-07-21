import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../utils/AuthContext";
import { Row, Col, Nav, Navbar, Image } from "react-bootstrap";
import Logo from "../../assets/images/brand/logo/logo.svg";
import Alert from "./Alert";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  const [expanded, setExpanded] = useState(false);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12}>
        <Navbar
          expand="lg"
          className="border-bottom"
          bg="white"
          variant="light"
          expanded={expanded}
        >
          <Navbar.Brand href="#home">
            <Image src={Logo} alt="" loading="lazy" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)}>Link</Nav.Link>

              {user ? (
                <Nav.Link
                  onClick={(event) => {
                    logoutUser(event);
                    setExpanded(false);
                  }}
                >
                  Logout
                </Nav.Link>
              ) : (
                <Link to={"/login"}>
                  <Nav.Link onClick={() => setExpanded(false)}>Login</Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      <Col>
        <Alert>
          Stacks are vertical by default and stacked items are full-width by
          default. Use the gap prop to add space between items. Stacks are
          vertical by default and stacked items are full-width by default. Use
          the gap prop to add space between items.
        </Alert>
      </Col>
    </Row>
  );
};

export default Header;
