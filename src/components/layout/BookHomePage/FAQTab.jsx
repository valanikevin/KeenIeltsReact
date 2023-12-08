// import node module libraries
import { Fragment } from "react";

const FAQTab = () => {
  return (
    <Fragment>
      <h3 className="mb-3">Course - Frequently Asked Questions</h3>
      {CourseFAQs.map((item, index) => (
        <div className="mb-4" key={index}>
          <h4>{item.question}</h4>
          <div dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      ))}
    </Fragment>
  );
};

const CourseFAQs = [
  {
    id: 1,
    question: "How this course help me to design layout?",
    answer: `<p>My name is Jason Woo and I work as human duct tape at Gatsby, 
        that means that I do a lot of different things. Everything from dev 
        roll to writing content to writing code. And I used to work as an architect at IBM. 
        I live in Portland, Oregon.</p>`,
  },
  {
    id: 2,
    question: "What is important of this course?",
    answer: `<p>We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`,
  },
  {
    id: 3,
    question: "Why Take This Course?",
    answer: `<p>We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics.
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`,
  },
  {
    id: 4,
    question: "Is able to create application after this course?",
    answer: `<p>
        We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
        to write React components in your markdown.</p>
        <p>We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
            to write React components in your markdown.</p>`,
  },
];

export default FAQTab;
