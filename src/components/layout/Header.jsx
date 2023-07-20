import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../utils/AuthContext";
import { Row, Col, Nav, Navbar, Image } from "react-bootstrap";
import Logo from "../../assets/images/brand/logo/logo.svg";
import Alert from "./Alert";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12}>
        <Navbar
          expand="lg"
          className="border-bottom"
          bg="white"
          variant="light"
        >
          <Navbar.Brand href="#home">
            <Image src={Logo} alt="" loading="lazy" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>

              {user ? (
                <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
              ) : (
                <Link to={"/login"}>
                  <Nav.Link>Login</Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      <Col>
        <Alert>This is a test</Alert>
      </Col>
    </Row>
  );
};

export default Header;
