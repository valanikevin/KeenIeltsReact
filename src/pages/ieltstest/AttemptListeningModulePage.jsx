import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../utils/useAxios";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../../components/elements/audioplayer/ReactAudioPlayer.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import parse from "html-react-parser";

const AttemptListeningModulePage = () => {
  const { module_slug } = useParams();
  const api = useAxios();
  const [module, setModule] = useState(null);

  useEffect(() => {
    getModule();
  }, [setModule]);

  async function getModule() {
    const response = await api.options(
      "/ieltstest/get_module/listening/" + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
    }
  }

  if (!module) {
    return null;
  }

  return (
    <>
      <Row className="sticky-top">
        <Col>
          <AudioPlayer
            className=" border-top"
            autoPlay={false}
            src={module.sections[0].audio}
            onPlay={(e) => console.log(module.sections[0].audio)}
          />
        </Col>
      </Row>
      <Container className="my-3">
        <Row>
          {module.sections.length > 0 &&
            module.sections.map((section) => (
              <Col key={section.id}>
                <Card>
                  <Card.Header>
                    <span className="text-uppercase fw-bold text-black">
                      {section.section}
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <form className="text-black">
                      {parse(section.questions, {
                        replace: (domNode) => {
                          if (domNode.name === "input") {
                            return (
                              <input className="m-2" {...domNode.attribs} />
                            );
                          }
                        },
                      })}
                    </form>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default AttemptListeningModulePage;
