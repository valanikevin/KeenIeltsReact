// import node module libraries
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Card,
  Image,
  Modal,
  Button,
  ListGroup,
  Badge,
  Stack,
} from "react-bootstrap";

// import MDI icons
import Icon from "@mdi/react";
import { mdiPlay } from "@mdi/js";

const FeatureDescriptionCard = ({ item }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card className="mb-4 ">
      {/*  Card body  */}
      <Card.Body className="p-6">
        <Stack direction="horizontal" className="mb-4">
          <div className="mb-3 mb-md-0">
            <Image
              src={item.icon}
              alt=""
              className=" bg-primary icon-shape icon-xxl rounded-circle"
            />
          </div>
          {/*  Content  */}
          <div className="ms-md-4 mx-3">
            <h3 className="fw-bold mb-1">
              {item.title}
              <Badge bg="warning" className="ms-2">
                {item.badge}
              </Badge>
            </h3>
          </div>
        </Stack>
        <p className="mb-4 fs-4">{item.shortdescription}</p>
      </Card.Body>
    </Card>
  );
};

export default FeatureDescriptionCard;
