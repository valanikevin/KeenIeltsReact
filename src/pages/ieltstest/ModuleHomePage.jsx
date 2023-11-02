import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PageHeadingBriefinfo from "../../components/layout/PageHeadingBriefInfo";
import { Col, Container, Row } from "react-bootstrap";
import BookCard from "../../components/ieltstest/BookCard";
import usePublicAxios from "../../utils/usePublicAxios";
import { API_URLS } from "../../utils/urls";
import useAxios from "../../utils/useAxios";

const ModuleHomePage = () => {
  let api;
  if (localStorage.getItem("authTokens")) {
    api = useAxios();
  } else {
    api = usePublicAxios();
  }
  const { module_slug } = useParams();
  const [books, setBooks] = useState([]);
  const module_data = {
    listening: {
      page_title: "Listening Tests",
      page_description:
        "Improve your English listening skills by practicing with mock tests that closely resemble the actual IELTS listening tests.",
      api_url: "/ieltstest/listening/",
    },
    reading: {
      page_title: "Reading Tests",
      page_description:
        "Improve your English reading skills by practicing with mock tests that closely resemble the actual IELTS listening tests.",
      api_url: "/ieltstest/reading/",
    },
    writing: {
      page_title: "Writing Tests",
      page_description:
        "Improve your English writing skills by practicing with mock tests that closely resemble the actual IELTS listening tests.",
      api_url: "/ieltstest/writing/",
    },
    speaking: {
      page_title: "Speaking Tests",
      page_description:
        "Improve your English speaking skills by practicing with mock tests that closely resemble the actual IELTS listening tests.",
      api_url: "/ieltstest/speaking/",
    },
  };

  useEffect(() => {
    getBooks();
  }, [module_slug]);

  const getBooks = async () => {
    try {
      const response = await api.get(module_data[module_slug].api_url);
      if (response.status === 200) {
        // Filter out books that have tests_with_listening_module
        const books = response.data.filter((book) => book["tests"].length > 0);
        setBooks(books);
      }
    } catch (error) {
      setBooks([]);
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    document.title = module_data[module_slug].page_title + " | KeenIELTS";
  }, []);

  if (!books) {
    return null;
  }
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
                module_slug={module_slug}
                image_url={book.cover}
                book={book}
                card_title={book.name}
                card_description={book.description}
                color={module_slug}
                module_data={module_data}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ModuleHomePage;
