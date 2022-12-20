import { Box, Button, makeStyles, Typography } from "@material-ui/core";

import logo from "../assets/logo.png";

const useStyles = makeStyles({
  logoStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
  },
  errorText: {
    color: "#999",
    padding: "50px 80px",
    fontSize: "40px",
    textAlign: "center",
  },
  button: {
    height: "30px",
    backgroundColor: "white",
    "& :hover": {
      color: "white",
    },
  },
  buttonBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
});

const ErrorScreen = ({ error }) => {

  const { logoStyle, errorText, button, buttonBox } = useStyles();

  const err = error || "ERROR 404 - PÁGINA NO ENCONTRADA";

  return (
    <Box className={logoStyle}>
      <img src={logo} alt="news-searcher logo" />
      <Typography className={errorText}>{err}</Typography>
      <Box className={buttonBox}>
        {error && (
          <Button
            href={`https://wa.me/5493624721322?text=Hola,%20vi%20un%20error%20en%20News%20Searcher%20que%20decía%20"${error}"`}
            target="_blank"
            className={button}
          >
            ENVIAR ERROR
          </Button>
        )}
        <Button href="/" className={button}>
          {error ? "REINTENTAR" : "INICIO"}
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorScreen;
