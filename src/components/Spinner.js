import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  spinnerBox: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
    boxSizing: "border-box",
  },
  spinner: { width: "100px !important", height: "100px !important" },
});

const Spinner = () => {
  const { spinnerBox, spinner } = useStyles();

  return (
    <Box className={spinnerBox}>
      <CircularProgress className={spinner} />;
    </Box>
  );
};

export default Spinner;
