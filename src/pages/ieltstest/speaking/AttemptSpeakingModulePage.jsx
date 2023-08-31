import React, { useState, useEffect } from "react";
import { API_URLS } from "../../../utils/urls";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";

const AttemptSpeakingModulePage = () => {
  const [deviceType, setDeviceType] = useState("desktop");
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const api = useAxios();

  // Effects
  useEffect(() => {
    getModule();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Functions
  async function getModule() {
    const response = await api.post(
      API_URLS.getSpeakingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      setCurrentSection(response.data.sections[0]);
    }
  }
  return <div>AttemptSpeakingModulePage</div>;
};

export default AttemptSpeakingModulePage;
