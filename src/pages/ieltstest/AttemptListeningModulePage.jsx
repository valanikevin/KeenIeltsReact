import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../utils/useAxios";
import ReactAudioPlayer from "../../components/elements/audioplayer/ReactAudioPlayer";

const AttemptListeningModulePage = () => {
  const { module_slug } = useParams();
  const api = useAxios();
  const [module, setModule] = useState({});

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

  return (
    <div className="p-5">
      <ReactAudioPlayer url="https://ielts-up.com/listening/1.2.mp3" />
    </div>
  );
};

export default AttemptListeningModulePage;
