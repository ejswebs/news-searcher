import React, { useState } from "react";
import { DateTime } from "luxon";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  IconButton,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Pagination } from "@material-ui/lab";

//import { articles } from "../assets/responseMock.json";
import { useNewsQuery } from "../utils/newsQuery";
import Spinner from "./Spinner";
import ErrorScreen from "../views/ErrorScreen";

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
  card: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    border: "1px solid",
    width: "1024px",
    backgroundColor: "#ddd",
    padding: "15px",
    height: "150px",
  },
  media: {
    width: "250px",
    height: "120px",
    borderRadius: "10px",
    alignSelf: "center",
  },
  bodyText: { padding: "0 10px 0 10px" },
  bodyCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "70%",
  },
  cardHeader: { padding: "0 0 10px 0" },
  pagination: {
    "& button": { color: "white" },
    "& .MuiPaginationItem-root": { color: "white" },
  },
  paginationText: { color: "white" },
  paginationContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 30px",
    boxSizing: "border-box",
  },
  buttonCard: { textTransform: "none" },
  resultsBox: { overflow: "auto" },
});

const ResultsTable = ({ articles, loading, error, count }) => {
  const {
    media,
    bodyCard,
    bodyText,
    card,
    container,
    cardHeader,
    pagination,
    paginationText,
    paginationContainer,
    buttonCard,
    resultsBox,
  } = useStyles();

  const [page, setPage] = useState(1);
  const handleChangePage = (e, p) => {
    setPage(p);
  };

  console.log(error);

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
                component={() => {
                  return <Card />;
                }}
                count={articles.length / 10}
                page={page}
                onChange={handleChangePage}
                rowsPerPage={10}
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
            ? articles.slice((page - 1) * 10, page * 10).map((article) => (
                <Button
                  className={buttonCard}
                  key={article.url}
                  href={article.url}
                  target="_blank"
                >
                  <Card key={article.title} className={card}>
                    <Box className={bodyCard}>
                      <CardHeader
                        className={cardHeader}
                        avatar={
                          <Avatar aria-label="recipe">
                            {article.source.name[0]}
                          </Avatar>
                        }
                        title={article.title}
                        subheader={
                          "Publicado el " +
                          DateTime.fromISO(article.publishedAt).toFormat(
                            "dd-MM-yyyy"
                          ) +
                          " a las " +
                          DateTime.fromISO(article.publishedAt).toFormat(
                            "HH:mm:ss"
                          ) +
                          " en " +
                          article.source.name
                        }
                      />
                      <CardContent className={bodyText}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {article.description}
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia
                      className={media}
                      image={article.urlToImage}
                      title="Paella dish"
                    />
                  </Card>
                </Button>
              ))
            : articles.map((article) => (
                <Button
                  className={buttonCard}
                  key={article.url}
                  href={article.url}
                  target="_blank"
                >
                  <Card key={article.title} className={card}>
                    <Box className={bodyCard}>
                      <CardHeader
                        className={cardHeader}
                        avatar={<Avatar aria-label="recipe">R</Avatar>}
                        title={article.title}
                        subheader={
                          "Publicado el " +
                          DateTime.fromISO(article.publishedAt).toFormat(
                            "dd-MM-yyyy"
                          ) +
                          " a las " +
                          DateTime.fromISO(article.publishedAt).toFormat(
                            "HH:mm:ss"
                          ) +
                          " en " +
                          article.source.name
                        }
                      />
                      <CardContent className={bodyText}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {article.description}
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia
                      className={media}
                      image={article.urlToImage}
                      title="Paella dish"
                    />
                  </Card>
                </Button>
              ))}
        </Box>
      </Box>
    )
  );
};

export default ResultsTable;
