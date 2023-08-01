import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../utils/useAxios";
import { async } from "q";

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

  return <h1>Kevin</h1>;
};

export default AttemptListeningModulePage;
