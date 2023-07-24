// import node module libraries
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Image, Dropdown, ListGroup, Button } from "react-bootstrap";

// simple bar scrolling used for notification item scrolling
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// import custom components
import DotBadge from "../../../components/elements/bootstrap/DotBadge";

// import media files
import Avatar1 from "../../../assets/images/avatar/avatar-1.jpg";

// import data files
import NotificationList from "../../../data/Notification";
import GKTippy from "../../../components/elements/tooltips/GKTippy";

const QuickMenu = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <Fragment>
      {/* <DarkLightMode /> */}
      <ListGroup
        as="ul"
        bsPrefix="navbar-nav"
        className="navbar-right-wrap ms-2 d-flex nav-top-wrap"
      >
        <Dropdown as="li">
          <Button
            as={Link}
            to={"/"}
            bsPrefix=" "
            className="text-dark me-lg-1  btn btn-light btn-icon rounded-circle text-muted"
            id=""
          >
            <i className="fe fe-bell"></i>
          </Button>
        </Dropdown>

        <Dropdown as="li" className="ms-1">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            className="rounded-circle"
            id="dropdownUser"
          >
            <div className="avatar avatar-md ">
              <Image alt="avatar" src={Avatar1} className="rounded-circle" />
            </div>
          </Dropdown.Toggle>
        </Dropdown>
      </ListGroup>
    </Fragment>
  );
};

export default QuickMenu;
