import { useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import PageHeadingBriefinfo from "../../components/layout/PageHeadingBriefInfo";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import BookCard from "../../components/ieltstest/BookCard";
import usePublicAxios from "../../utils/usePublicAxios";
import useAxios from "../../utils/useAxios";
import TestTypeContext from "../../context/TestTypeContext";
import TestTypeSwitch from "../../components/ieltstest/TestTypeSwitch";

const ModuleHomePage = () => {
  let api;
  if (localStorage.getItem("authTokens")) {
    api = useAxios();
  } else {
    api = usePublicAxios();
  }
  const { module_slug } = useParams();
  const [books, setBooks] = useState([]);
  const [testType, setTestType] = useContext(TestTypeContext);

  useEffect(() => {
    if (testType) {
      getBooks();
    }
  }, [module_slug, testType]);

  const getBooks = async () => {
    try {
      const response = await api.get(module_data[module_slug].api_url, {
        params: {
          // Use the `params` key to include query parameters
          testType: testType,
        },
      });
      if (response.status === 200) {
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
      <div className="border-bottom">
        <TestTypeSwitch />
      </div>
      <Container className="p-3 app">
        <Row>
          {books.map((book) => (
            <Col xs={12} md={4} lg={3} key={book.slug}>
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
const module_data = {
  listening: {
    title: "Listening Test",
    page_title: "Listening Books",
    page_description:
      "Improve your English listening skills by practicing with mock tests that closely resemble the actual IELTS listening tests.",
    api_url: "/ieltstest/listening/",
  },
  reading: {
    title: "Reading Test",
    page_title: "Reading Books",
    page_description:
      "Improve your English reading skills by practicing with mock tests that closely resemble the actual IELTS listening tests.",
    api_url: "/ieltstest/reading/",
  },
  writing: {
    title: "Writing Test",
    page_title: "Writing Books",
    page_description:
      "Improve your English writing skills by practicing with mock tests that closely resemble the actual IELTS listening tests.",
    api_url: "/ieltstest/writing/",
  },
  speaking: {
    title: "Speaking Test",
    page_title: "Speaking Books",
    page_description:
      "Improve your English speaking skills by practicing with mock tests that closely resemble the actual IELTS listening tests.",
    api_url: "/ieltstest/speaking/",
  },
  fulltest: {
    title: "Full Test",
    page_title: "Full Test Books",
    page_description: "Practice full IELTS test with answers and explanations.",
    api_url: "/ieltstest/fulltest/",
  },
};

export default ModuleHomePage;
