import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PageHeadingBriefinfo from "../../components/layout/PageHeadingBriefInfo";
import { Col, Container, Row } from "react-bootstrap";
import BookCard from "../../components/ieltstest/BookCard";
import usePublicAxios from "../../utils/usePublicAxios";
import { API_URLS } from "../../utils/urls";

const ModuleHomePage = () => {
  const api = usePublicAxios();
  const { module_slug } = useParams();
  const [books, setBooks] = useState([]);
  const module_data = {
    listening: {
      page_title: "Listening Tests",
      page_description:
        "Improve your English listening skills by practicing with mock tests that closely resemble the actual IELTS listening tests.",
      api_url: "/ieltstest/listening/",
      api_array_variable: "tests_with_listening_module",
    },
  };

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await api.get(module_data[module_slug].api_url);
      if (response.status === 200) {
        // Filter out books that have tests_with_listening_module
        const books = response.data.books.filter(
          (book) => book[module_data[module_slug].api_array_variable].length > 0
        );
        setBooks(books);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  return (
    <div>
      <PageHeadingBriefinfo
        pagetitle={module_data[module_slug].page_title}
        briefinfo={module_data[module_slug].page_description}
        color={`bg-${module_slug}`}
      />
      <Container className="p-3 app">
        <Row>
          {books.map((book) => (
            <Col xs={12} md={6} lg={4} key={book.slug}>
              <BookCard
                test_type={`${module_slug} test`}
                module_type={module_slug}
                image_url={book.cover}
                book={book}
                card_title={book.name}
                card_description={book.description}
                color={module_slug}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ModuleHomePage;
