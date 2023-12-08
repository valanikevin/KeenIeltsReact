// import node module libraries
import { Fragment } from "react";
import { Link } from "react-router-dom";

const TranscriptTab = () => {
  return (
    <Fragment>
      <h3 className="mb-3">Transcript from the "Introduction" Lesson</h3>
      {Transcripts.map((item, index) => (
        <div className="mb-4" key={index}>
          <h4>
            {item.title}{" "}
            <Link to="#" className="text-primary ms-2 h4">
              {item.duration}
            </Link>
          </h4>
          <div
            dangerouslySetInnerHTML={{
              __html: item.description,
            }}
          />
        </div>
      ))}
    </Fragment>
  );
};

const Transcripts = [
  {
    id: 1,
    title: "Course Overview",
    duration: "[00:00:00]",
    description: `<p class="mb-0">My name is John Deo and I work as human duct tape at Gatsby, 
        that means that I do a lot of different things. Everything from dev roll to writing 
        content to writing code. And I used to work as an architect at IBM. I live in Portland, 
        Oregon.</p>`,
  },
  {
    id: 2,
    title: "Introduction",
    duration: "[00:00:16]",
    description: `<p>We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`,
  },
  {
    id: 3,
    title: "Why Take This Course?",
    duration: "[00:00:37]",
    description: `<p> We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`,
  },
  {
    id: 4,
    title: "A Look at the Demo Application",
    duration: "[00:00:54]",
    description: `<p>We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>
        <p>We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`,
  },
  {
    id: 5,
    title: "Summary",
    duration: "[00:01:31]",
    description: `<p> We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`,
  },
];

export default TranscriptTab;
