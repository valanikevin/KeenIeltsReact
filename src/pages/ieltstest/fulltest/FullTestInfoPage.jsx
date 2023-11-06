import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { DJANGO_BASE_URL } from "../../../utils/config";

const FullTestInfoPage = () => {
  const { attempt_slug } = useParams();
  const api = useAxios();
  const [fullTest, setFullTest] = useState(null);

  async function getFullTestInfo() {
    const response = await api.post(
      DJANGO_BASE_URL + "/ieltstest/get_fulltest_info/" + attempt_slug + "/"
    );
    if (response.status === 200) {
      setFullTest(response.data);
    } else {
      console.log("Error");
    }
  }

  useEffect(() => {
    getFullTestInfo();
  }, []);

  return <h1>FullTestInfoPage</h1>;
};

export default FullTestInfoPage;
