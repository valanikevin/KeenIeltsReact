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

export const ReadingNavBar = ({
  module,
  currentSection,
  updateCurrentSection,
  setShowTestInfoModal,
}) => {
  if (!module) {
    return null;
  }
  return (
    <Navbar bg="white" fixed="top" style={{ height: "50px" }}>
      <Navbar.Brand as={Link} to="/">
        <Image src={Logo} alt="" />
      </Navbar.Brand>
      <ButtonGroup size="sm" className="ms-auto mx-2">
        <DropdownButton
          title={`${currentSection.section}`}
          id="bg-nested-dropdown"
          size="sm"
          className="text-white"
          variant="outline-primary"
        >
          {module.sections.map((section) => (
            <Dropdown.Item
              eventKey={section.id}
              key={section.id}
              active={section.id === currentSection.id}
              onClick={() => updateCurrentSection(section.id)}
            >
              {section.section}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </ButtonGroup>

      <DropdownButton
        title="Menu"
        id="bg-nested-dropdown"
        size="sm"
        className="text-white"
        variant="outline-primary"
      >
        <Dropdown.Item eventKey="1" as={Link} to={"/"}>
          Home
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={() => setShowTestInfoModal(true)}>
          Book Info
        </Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
};
