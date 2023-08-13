import React from "react";
import { Table } from "react-bootstrap";

const BookInfo = ({ module, attempt_slug }) => {
  return (
    <Table striped bordered hover responsive>
      <tbody>
        <tr>
          <td className="text-black">Book Name</td>
          <td className="text-black">{module.test.book.name}</td>
        </tr>

        <tr>
          <td className="text-black">Test Name</td>
          <td className="text-black">{module.test.name}</td>
        </tr>

        <tr>
          <td className="text-black">Module Name</td>
          <td className="text-black">{module.name}</td>
        </tr>

        <tr>
          <td className="text-black">Test Type</td>
          <td className="text-black">Academic, General</td>
        </tr>

        <tr>
          <td className="text-black">Attempt</td>
          <td className="text-black">{attempt_slug}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BookInfo;
