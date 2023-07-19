import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import AuthContext from "../utils/AuthContext";

const HomePage = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await axiosInstance.get("/api/notes/");
    if (response.status === 200) {
      setNotes(response.data);
    }
  };
  return (
    <div>
      Notes:
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
