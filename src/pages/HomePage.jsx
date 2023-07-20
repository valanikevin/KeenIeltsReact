import { useState, useEffect, useContext } from "react";
import useAxios from "../utils/useAxios";
import { ErrorContext } from "../App";

const HomePage = () => {
  let [notes, setNotes] = useState([]);
  let api = useAxios();
  const [error, setError] = useContext(ErrorContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await api.get("/api/notes/");

    if (response.status === 200) {
      setNotes(response.data);
    }
  };

  useEffect(() => {
    setError("Login Error");
  });

  return (
    <div>
      <p>You are logged to the home page!</p>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
