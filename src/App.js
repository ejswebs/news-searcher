import React, { useState } from "react";
import "./App.css";

import { Box } from "@material-ui/core";

import ResultsTable from "./components/ResultsTable";
import Searcher from "./components/Searcher";
import Header from "./components/Header";

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <Searcher
        setArticles={setArticles}
        setLoading={setLoading}
        setError={setError}
        setCount={setCount}
      />
      <ResultsTable
        articles={articles}
        loading={loading}
        error={error}
        count={count}
      />
    </>
  );
}

export default App;
