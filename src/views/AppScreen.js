import { useState } from "react";

import { Box, makeStyles } from "@material-ui/core";

import "../App.css";
import ResultsTable from "../components/ResultsTable";
import Searcher from "../components/Searcher";
import Header from "../components/Header";
import Footer from "../components/Footer";

const useStyles = makeStyles({
  view: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appContainer: { height: "calc(100vh - 105px)", width: "80vw" },
});

const SearcherScreen = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();

  const { view, appContainer } = useStyles();

  return (
    <Box className={view}>
      <Header
        setArticles={setArticles}
        setLoading={setLoading}
        setError={setError}
        setCount={setCount}
        count={count}
        search={search}
        setSearch={setSearch}
      />
      <Box className={appContainer}>
        {count || error ? (
          <ResultsTable
            articles={articles}
            loading={loading}
            error={error}
            count={count}
          />
        ) : (
          <Searcher
            setArticles={setArticles}
            setLoading={setLoading}
            setError={setError}
            setCount={setCount}
            search={search}
            setSearch={setSearch}
          />
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default SearcherScreen;
