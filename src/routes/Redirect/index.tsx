import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Page not found</h1>
        <div>
          Return to <Link to="/">Home page</Link>
        </div>
      </main>
    </>
  );
};

export default Index;
