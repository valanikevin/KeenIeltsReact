import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext, { useAuth } from "../utils/AuthContext";

const Header = () => {
  const navigate = useNavigate();

  let { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <Image src={Logo} alt="" loading="lazy" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {user ? (
        <>
          <h1>Helllo {user.email}</h1>
          <Link to={"/"}>Home Page</Link>
          <span> | </span>
          <button onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <>
          <Link to={"/"}>Home Page</Link>
          <span> | </span>
          <Link to={"/login"}>Login</Link>
        </>
      )}
    </div>
  );
};

export default Header;
