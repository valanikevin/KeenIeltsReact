import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosWithoutLoader from "../../../utils/useAxiosWithoutLoader";
import { API_URLS } from "../../../utils/urls";

const WritingResultPage = () => {
  const { module_slug, attempt_slug } = useParams();
  const [bands, setBands] = useState(null);
  const [evaluation, setEvaluation] = useState(null);
  const [attempt, setAttempt] = useState(null);
  const api = useAxiosWithoutLoader();

  async function getBands() {
    const response = await api.post(
      "/ieltstest/get_writing_bands/" + attempt_slug + "/"
    );
    if (response.status === 200) {
      setBands(response.data);
      console.log(response.data);
    }
  }

  async function getEvaluation() {
    const response = await api.post(
      "/ieltstest/get_writing_evaluation/" + attempt_slug + "/"
    );
    if (response.status === 200) {
      setEvaluation(response.data);
      console.log(response.data);
    }
  }

  async function getAttempt() {
    const response = await api.post(
      API_URLS.getWritingAttempt + attempt_slug + "/"
    );
    if (response.status === 200) {
      setAttempt(response.data);
    } else {
      console.error("Unable to fetch attempt at ListeningResult.jsx");
    }
  }

  useEffect(() => {
    getBands();
    getEvaluation();
  }, []);

  return <div>WritingResultPage</div>;
};

export default WritingResultPage;
