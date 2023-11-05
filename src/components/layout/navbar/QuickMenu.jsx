// import node module libraries
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { Dropdown, ListGroup, Button } from "react-bootstrap";

import "simplebar/dist/simplebar.min.css";

import { FiUser } from "react-icons/fi";

const QuickMenu = () => {
  return (
    <Fragment>
      {/* <DarkLightMode /> */}
      <ListGroup
        as="ul"
        bsPrefix="navbar-nav"
        className="navbar-right-wrap ms-2 d-flex nav-top-wrap"
      >
        <Dropdown as="li" className="">
          <Button
            as={Link}
            to={"/account"}
            bsPrefix=" "
            className="text-dark me-lg-1  btn btn-light btn-icon rounded-circle text-muted"
            id=""
          >
            <FiUser size={20} className="text-dark" />
          </Button>
        </Dropdown>
      </ListGroup>
    </Fragment>
  );
};

export default QuickMenu;
