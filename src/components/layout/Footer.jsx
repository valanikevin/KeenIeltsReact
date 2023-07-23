import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

// import MDI icons
import Icon from "@mdi/react";
import { mdiTwitter, mdiInstagram, mdiYoutube } from "@mdi/js";

const Footer = () => {
  return (
    <div className="bg-white p-4 border-top">
      <Row>
        <Col xl={{ offset: 1, span: 10 }} lg={12} md={12}>
          <Row className="align-items-center">
            <Col md={6} xl={8} lg={8} xs={8}>
              <p className="mb-0 text-black">© 2023 Keen Education</p>
            </Col>
            <Col
              md={6}
              xl={4}
              lg={4}
              xs={4}
              className="d-flex justify-content-end"
            >
              <Link to="#" className="text-muted text-primary-hover me-3">
                <Icon path={mdiTwitter} size={1} />
              </Link>
              <Link to="#" className="text-muted text-primary-hover me-3  ">
                <Icon path={mdiInstagram} size={1} />
              </Link>
              <Link to="#" className="text-muted text-primary-hover  ">
                <Icon path={mdiYoutube} size={1} />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
