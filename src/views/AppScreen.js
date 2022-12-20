import { useState } from "react";

import { Box, makeStyles, Typography } from "@material-ui/core";

import "../App.css";
import logo from "../assets/logo.png";
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
    boxSizing: "border-box",
    justifyContent: "space-between",
  },
  appContainer: {
    height: "calc(100vh - 105px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
    gap: "100px",
    boxSizing: "border-box",
  },
  noResults: { color: "#999" },
});

const SearcherScreen = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { view, appContainer, noResults } = useStyles();

  return (
    <Box className={view}>
      {(count > 0 || error) && (
        <Header
          setArticles={setArticles}
          setLoading={setLoading}
          setError={setError}
          setCount={setCount}
          count={count}
          search={search}
          home={!(count > 0 && error)}
          setSearch={setSearch}
        />
      )}
      <Box className={appContainer}>
        {count > 0 || error || loading ? (
          <ResultsTable
            articles={articles}
            loading={loading}
            error={error}
            count={count}
          />
        ) : (
          <>
            <img src={logo} alt="news-searcher logo" />
            {count === 0 && (
              <Typography className={noResults}>
                No se encontraron resultados para "{search}"
              </Typography>
            )}
            <Searcher
              setArticles={setArticles}
              setLoading={setLoading}
              setError={setError}
              setCount={setCount}
              search={search}
              setSearch={setSearch}
              count={count}
              home={!(count > 0 && error)}
            />
          </>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default SearcherScreen;
