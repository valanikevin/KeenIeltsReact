import React, { useEffect, useState } from "react";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/urls";
import { useParams } from "react-router-dom";
import { MiniNavBar } from "../../../components/ieltstest/MiniNavBar";
import { Modal } from "react-bootstrap";
import BookInfo from "../../../components/ieltstest/listening/BookInfo";

const AttemptWritingModulePage = () => {
  // Variables:
  const api = useAxios();
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [showTestInfoModal, setShowTestInfoModal] = useState(false);
  const handleCloseTestInfoModal = () => setShowTestInfoModal(false);

  // Functions
  async function getModule() {
    const response = await api.post(
      API_URLS.getWritingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      setCurrentSection(response.data.sections[0]);
    }
  }
  //useEffects

  useEffect(() => {
    getModule();
  }, []);

  if (!module) {
    return null;
  }
  return (
    <>
      <Modal
        show={showTestInfoModal}
        onHide={handleCloseTestInfoModal}
        centered
        className="p-0"
      >
        <Modal.Header closeButton>
          <Modal.Title>Test Info</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <BookInfo module={module} attempt_slug={attempt_slug} />
        </Modal.Body>
        <div class="modal-footer py-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleCloseTestInfoModal}
          >
            Close
          </button>
        </div>
      </Modal>
      <MiniNavBar
        module={module}
        currentSection={currentSection}
        setShowTestInfoModal={setShowTestInfoModal}
      />
      <h4>Kevin</h4>
    </>
  );
};

export default AttemptWritingModulePage;
