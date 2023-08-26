import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Skeleton.css";

const SkeletonLoader = ({ title }) => {
  return (
    <Card className="skeleton-card">
      <Card.Header>
        {title ? (
          <span className="fw-bold text-black">{title}</span>
        ) : (
          <div className="skeleton-header"></div>
        )}
      </Card.Header>
      <Card.Body>
        <div className="skeleton-content"></div>
        <div className="skeleton-content"></div>
        <div className="skeleton-content"></div>
      </Card.Body>
      <Card.Footer>
        <div className="skeleton-footer"></div>
      </Card.Footer>
    </Card>
  );
};

export default SkeletonLoader;
