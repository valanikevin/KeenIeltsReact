import React, { useEffect, useState } from "react";
import useAxios from "../../utils/useAxios";
import { API_URLS } from "../../utils/urls";

const ListeningHomePage = () => {
  const api = useAxios();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await api.get(API_URLS.getListeningBooks);
      if (response.status === 200) {
        // Filter out books that have tests_with_listening_module
        const booksWithListeningTests = response.data.books.filter(
          (book) => book.tests_with_listening_module.length > 0
        );
        setBooks(booksWithListeningTests);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div>
      <p>Listening Books:</p>
      <ul>
        {books.map((book) => (
          <li key={book.slug}>
            {book.name}
            {book.tests_with_listening_module.length > 0 && (
              <ul>
                {book.tests_with_listening_module[0].listening_module.map(
                  (module) => (
                    <li key={module.slug}>{module.name}</li>
                  )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeningHomePage;
