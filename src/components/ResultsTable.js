import { useState } from "react";

import { Box, makeStyles, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import Spinner from "./Spinner";
import ErrorScreen from "../views/ErrorScreen";
import NewsCard from "./NewsCard";

const useStyles = makeStyles({
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    height: "100%",
    padding: "20px 0 10px 0",
  },
  pagination: {
    "& button": { color: "white" },
    "& .MuiPaginationItem-root": { color: "white" },
  },
  paginationText: { color: "white" },
  paginationContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "80vw",
    padding: "0 30px",
    boxSizing: "border-box",
  },
  resultsBox: {
    width: "80vw",
    boxSizing: "border-box",
    overflow: "auto",
  },
});

const ResultsTable = ({ articles, loading, error, count }) => {
  const {
    container,
    pagination,
    paginationText,
    paginationContainer,
    resultsBox,
  } = useStyles();

  const [page, setPage] = useState(1);
  const handleChangePage = (e, p) => {
    setPage(p);
  };

  return loading ? (
    <Spinner />
  ) : error ? (
    <ErrorScreen error={error} />
  ) : (
    count > 0 && (
      <Box className={container}>
        <Box className={paginationContainer}>
          {articles.length > 10 ? (
            <>
              <Typography className={paginationText}>
                Se muestran {10} resultados de un total de {articles.length}
              </Typography>
              <Pagination
                className={pagination}
                count={articles.length / 10}
                page={page}
                onChange={handleChangePage}
              />
            </>
          ) : (
            articles.length && (
              <Typography className={paginationText}>
                Se muestran {articles.length} resultados de un total de{" "}
                {articles.length}
              </Typography>
            )
          )}
        </Box>
        <Box className={resultsBox}>
          {articles.length > 10
            ? articles
                .slice((page - 1) * 10, page * 10)
                .map((article, i) => <NewsCard key={i} article={article} />)
            : articles.map((article, i) => (
                <NewsCard key={i} article={article} />
              ))}
        </Box>
      </Box>
    )
  );
};

export default ResultsTable;
