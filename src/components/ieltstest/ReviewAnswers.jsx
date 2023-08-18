import React from "react";
import { Table } from "react-bootstrap";

const ReviewAnswers = ({ attempt }) => {
  return (
    <Table bordered className="table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Your Answer</th>
          <th scope="col">Correct Answer</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(attempt.evaluation.all_questions).map((item, index) => (
          <tr
            key={index}
            className={
              item[1]["is_user_answer_correct"] === true
                ? "table-success"
                : "table-danger"
            }
          >
            <td className="fw-bold">{index + 1}</td>
            <td className="text-black">{item[1]["user_answer"]}</td>
            <td className="text-black">
              {item[1]["correct_answer"].length > 1
                ? JSON.stringify(item[1]["correct_answer"])
                : item[1]["correct_answer"]}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReviewAnswers;
