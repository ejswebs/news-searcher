import React from "react";

import logo from "../assets/logo.png";

import { Box, Button, makeStyles, Typography } from "@material-ui/core";

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
});

const ErrorScreen = ({ error }) => {
  console.log(error);
  const { logoStyle, errorText } = useStyles();
  return (
    <Box className={logoStyle}>
      <img src={logo} alt="news-searcher logo" />
      <Typography className={errorText}>
        {error || "ERROR 404 - PÁGINA NO ENCONTRADA"}
      </Typography>
      <Box>
        <Button>ENVIAR ERROR</Button>
        <Button>REINTENTAR</Button>
      </Box>
    </Box>
  );
};

export default ErrorScreen;
