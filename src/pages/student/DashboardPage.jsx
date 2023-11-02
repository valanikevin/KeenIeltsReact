import React, { useEffect } from "react";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "KeenIELTS - The Smart Choice for IELTS Excellence";
  }, []);
  return <div>DashboardPage</div>;
};

export default DashboardPage;
