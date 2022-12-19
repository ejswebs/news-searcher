import React, { useState } from "react";

import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import { useNewsQuery } from "../hooks/useNewsQuery";

const useStyles = makeStyles({
  searcherContainer: {
    padding: "30px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  searcherInput: {
    width: "30%",
    "& .MuiOutlinedInput-input": {
      backgroundColor: "white",
      borderRadius: "10px",
      height: "30px",
      padding: "0",
    },
  },
  searcherButton: {
    backgroundColor: "white",
    "& :hover": {
      color: "white",
    },
  },
});

const Searcher = ({ setArticles, setLoading, setError, setCount }) => {
  const { searcherInput, searcherContainer, searcherButton } = useStyles();

  const [search, setSearch] = useState();

  console.log(search);

  const onSearch = () => {
    setLoading(true);
    useNewsQuery({ search, setArticles, setLoading, setError, setCount });
  };

  return (
    <Box className={searcherContainer}>
      <TextField
        variant="outlined"
        className={searcherInput}
        onChange={(e) => setSearch(e.target.value)}
      ></TextField>
      <Button
        disabled={!search || search.length < 3}
        className={searcherButton}
        onClick={onSearch}
      >
        Buscar
      </Button>
    </Box>
  );
};

export default Searcher;
