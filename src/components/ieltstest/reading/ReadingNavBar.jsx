import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Image,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import Logo from "../../../assets/images/brand/logo/logo.svg";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

export const ReadingNavBar = () => {
  return (
    <Navbar bg="white" fixed="top" style={{ height: "50px" }}>
      <Navbar.Brand as={Link} to="/">
        <Image src={Logo} alt="" />
      </Navbar.Brand>
      <ButtonGroup size="sm" className="ms-auto mx-2">
        <DropdownButton
          title="Section 1"
          id="bg-nested-dropdown"
          size="sm"
          className="text-white"
          variant="outline-primary"
        >
          <Dropdown.Item eventKey="1">Section 1</Dropdown.Item>
          <Dropdown.Item eventKey="2">Section 2</Dropdown.Item>
          <Dropdown.Item eventKey="2">Section 3</Dropdown.Item>
          <Dropdown.Item eventKey="2">Section 4</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
      <DropdownButton
        title="Menu"
        id="bg-nested-dropdown"
        size="sm"
        className="text-white"
        variant="outline-primary"
      >
        <Dropdown.Item eventKey="1">Home</Dropdown.Item>
        <Dropdown.Item eventKey="2">Test Info</Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
};
