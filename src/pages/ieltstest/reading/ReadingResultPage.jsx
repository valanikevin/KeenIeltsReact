import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/urls";
import ScoreSection from "../../../components/ieltstest/ScoreSection";

const ReadingResultPage = () => {
  const api = useAxios();
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [attempt, setAttempt] = useState(null);

  async function getModule() {
    const response = await api.post(
      API_URLS.getReadingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
    }
  }

  async function getAttempt() {
    const response = await api.post(
      API_URLS.getReadingAttempt + attempt_slug + "/"
    );
    if (response.status === 200) {
      setAttempt(response.data);
    } else {
      console.error("Unable to fetch attempt at ListeningResult.jsx");
    }
  }

  useEffect(() => {
    getAttempt();
  }, []);

  useEffect(() => {
    getModule();
  }, []);

  if (!attempt || !attempt.evaluation) {
    return null;
  }

  if (!module) {
    return null;
  }

  return (
    <div className="border-bottom">
      <ScoreSection attempt={attempt} module_name={"Reading"} />
    </div>
  );
};

export default ReadingResultPage;
