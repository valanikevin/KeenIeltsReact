import React, { useEffect, useState } from "react";
import useAxios from "../../utils/useAxios";
import { API_URLS } from "../../utils/urls";
import PageHeadingBriefinfo from "../../components/layout/PageHeadingBriefInfo";
import { Col, Container, Row } from "react-bootstrap";
import { LISTENING_MODULE_VARIABLES } from "../../utils/variables";
import BookCard from "../../components/ieltstest/BookCard";

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
      <PageHeadingBriefinfo
        pagetitle={LISTENING_MODULE_VARIABLES.LISTENING_1}
        briefinfo={LISTENING_MODULE_VARIABLES.LISTENING_2}
        color="bg-listening"
      />
      <Container className="p-3 app">
        <Row>
          {books.map((book) => (
            <Col xs={12} md={6} lg={4} key={book.slug}>
              <BookCard
                test_type="Listening Test"
                image_url={book.cover}
                card_title={book.name}
                card_description={book.description}
                book_tests={book.tests_with_listening_module}
                color={"bg-listening"}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListeningHomePage;
