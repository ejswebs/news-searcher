import { Box, Button, makeStyles, TextField } from "@material-ui/core";

import { newsQuery } from "../utils/newsQuery";

const useStyles = makeStyles({
  searcherContainer: {
    padding: "20px 10px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    width: "40%",
  },
  searcherInput: {
    width: "80%",
    "& .MuiOutlinedInput-input": {
      backgroundColor: "white",
      borderRadius: "10px",
      height: "30px",
      padding: "0 10px",
    },
  },
  searcherButton: {
    height: "30px",
    backgroundColor: "white",
    "& :hover": {
      color: "white",
    },
  },
});

const Searcher = ({
  setArticles,
  setLoading,
  setError,
  setCount,
  search,
  setSearch,
}) => {
  const { searcherInput, searcherContainer, searcherButton } = useStyles();

  const onSearch = () => {
    setLoading(true);
    newsQuery({ search, setArticles, setLoading, setError, setCount });
  };

  return (
    <Box className={searcherContainer}>
      <TextField
        variant="outlined"
        className={searcherInput}
        value={search}
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
