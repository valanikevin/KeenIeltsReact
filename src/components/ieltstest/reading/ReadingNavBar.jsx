import React from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
import Logo from "../../../assets/images/brand/logo/logo.svg";
import { Link } from "react-router-dom";

export const ReadingNavBar = () => {
  return (
    <Navbar bg="white" fixed="top" style={{ height: "50px" }}>
      <Navbar.Brand as={Link} to="/">
        <Image src={Logo} alt="" />
      </Navbar.Brand>
      <Button variant="outline-primary" size="sm" className="ms-auto mx-2">
        Home
      </Button>
      <Button variant="primary" size="sm" className="">
        Test Info
      </Button>
    </Navbar>
  );
};
