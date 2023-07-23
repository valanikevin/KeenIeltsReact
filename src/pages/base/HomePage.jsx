import { useState, useEffect } from "react";
import useAxios from "../../utils/useAxios";

const HomePage = () => {
  let api = useAxios();

  return (
    <div>
      <p>You are logged to the home page!</p>

      <ul></ul>
    </div>
  );
};

export default HomePage;
