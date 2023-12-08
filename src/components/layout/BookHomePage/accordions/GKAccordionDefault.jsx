// import node module libraries
import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
  ListGroup,
} from "react-bootstrap";

import Icon from "@mdi/react";
import { mdiPlay } from "@mdi/js";

const GKAccordionDefault = ({ accordionItems, itemClass }) => {
  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <Fragment>
        <Link
          to="#"
          onClick={decoratedOnClick}
          aria-expanded={isCurrentEventKey}
          className="d-flex align-items-center text-inherit text-decoration-none h4 mb-0"
          data-bs-toggle="collapse"
          aria-controls="courseTwo"
        >
          <div className="me-auto">{children.title}</div>
          <span className="chevron-arrow ms-4">
            <i className="fe fe-chevron-down fs-4"></i>
          </span>
        </Link>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Accordion defaultActiveKey={accordionItems[0].id}>
        <ListGroup as="ul" variant="flush">
          {accordionItems.map((item, index) => {
            if (item.topics.length === 0) {
              return (
                <ListGroup.Item
                  key={index}
                  as="li"
                  className={`${itemClass ? itemClass : ""}`}
                >
                  <ContextAwareToggle eventKey={item.id}>
                    {item}
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey={item.id}>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="border-0 fs-5 px-0 py-4">
                        {item.summary}
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </ListGroup.Item>
              );
            } else {
              return (
                <ListGroup.Item
                  key={index}
                  as="li"
                  className={`${itemClass ? itemClass : ""}`}
                >
                  <ContextAwareToggle eventKey={item.id}>
                    {item}
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey={item.id} className="test">
                    <ListGroup className="py-4" as="ul">
                      {item.topics.map((subitem, subindex) => (
                        <ListGroup.Item
                          key={subindex}
                          as="li"
                          disabled={subitem.locked}
                          className="px-0 py-1 border-0"
                        >
                          <Link
                            to="#"
                            className={`d-flex justify-content-between align-items-center text-inherit text-decoration-none`}
                          >
                            <div className="text-truncate ">
                              <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                {subitem.locked ? (
                                  <i className="fe fe-lock fs-4"></i>
                                ) : (
                                  <Icon path={mdiPlay} size={0.8} />
                                )}{" "}
                              </span>
                              <span className="fs-5">{subitem.topic}</span>
                            </div>
                            <div className="text-truncate">
                              <span>{subitem.duratoin}</span>
                            </div>
                          </Link>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Accordion.Collapse>
                </ListGroup.Item>
              );
            }
          })}
        </ListGroup>
      </Accordion>
    </Fragment>
  );
};

export default GKAccordionDefault;
