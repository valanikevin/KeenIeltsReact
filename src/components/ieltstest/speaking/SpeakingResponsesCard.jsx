import React, { useEffect, useState } from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import CustomAudioPlayer from "../../elements/audioplayer/CustomAudioPlayer";
import { FiPlayCircle } from "react-icons/fi";

const SpeakingResponsesCard = ({ attempt, module }) => {
  const [currentAudioQuestionId, setCurrentAudioQuestionId] = useState(0);
  const [currentAudioQuestion, setCurrentAudioQuestion] = useState(null);
    const [currentAudioTime, setCurrentAudioTime] = useState(0.0);
  const handleTimeUpdate = (currentTime) => {
    Object.entries(attempt.merged_timestamps).forEach(([key, value]) => {
      const timestamp = parseFloat(value);
      if (currentTime >= timestamp) {
        setCurrentAudioQuestionId(key);
      }
    });
  };

  useEffect(() => {
    if (module) {
      module.sections.forEach((section) => {
        section.questions.forEach((question) => {
          if (question.id == currentAudioQuestionId) {
            setCurrentAudioQuestion(question.question);
          }
        });
      });
    } else {
      console.log("Module is null");
    }
  }, [currentAudioQuestionId]);

  return (
    <Card>
      <Card.Header>
        <h3 className="mt-2 fw-bold">Your Responses</h3>
      </Card.Header>
      <div className="mt-3">
        {currentAudioQuestion && (
          <div className="border-bottom px-4 pt-2 pb-3 text-center mb-3">
            <h4>{currentAudioQuestion}</h4>
          </div>
        )}
        <div className="">
          <CustomAudioPlayer
            src={attempt.merged_audio}
            start_time={currentAudioTime}
            handleTimeUpdate={handleTimeUpdate}
          />
        </div>
      </div>
      <hr />
      <Card.Body>
        <Accordion>
          {module.sections.map((section, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                <h4 className="mt-2 fw-bold">{section.section} Questions</h4>
              </Accordion.Header>
              <Accordion.Body className="">
                <div className="">
                  <Table bordered striped responsive>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Question Asked</th>
                        <th scope="col">Play</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.questions.map((question, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{question.question}</td>
                          <td>
                            <FiPlayCircle
                              size={20}
                              onClick={() => {
                                setCurrentAudioTime(
                                  attempt.merged_timestamps[question.id]
                                );
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default SpeakingResponsesCard;
