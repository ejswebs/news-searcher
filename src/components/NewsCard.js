import { DateTime } from "luxon";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    border: "1px solid",
    width: "75vw",
    backgroundColor: "#ddd",
    padding: "15px",
    height: "150px",
    boxSizing: "border-box",
  },
  media: {
    width: "250px",
    height: "120px",
    borderRadius: "10px",
    alignSelf: "center",
  },
  bodyText: { padding: "0 10px 0 10px" },
  bodyCard: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "calc(100vw * 0.7)",
  },
  cardHeader: { padding: "0 0 10px 0" },
  buttonCard: { textTransform: "none" },
});

const NewsCard = ({ article }) => {
  const { bodyCard, bodyText, buttonCard, card, cardHeader, media } =
    useStyles();

  return (
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
              <Avatar aria-label="recipe">{article.source.name[0]}</Avatar>
            }
            title={article.title}
            subheader={
              "Publicado el " +
              DateTime.fromISO(article.publishedAt).toFormat("dd-MM-yyyy") +
              " a las " +
              DateTime.fromISO(article.publishedAt).toFormat("HH:mm:ss") +
              " en " +
              article.source.name
            }
          />
          <CardContent className={bodyText}>
            <Typography variant="body2" color="textSecondary">
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
  );
};

export default NewsCard;
