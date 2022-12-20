import { Box, Button, makeStyles, TextField } from "@material-ui/core";

import { newsQuery } from "../utils/newsQuery";

const useStyles = makeStyles({
  searcherContainer: {
    padding: "20px 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: ({ home }) => (home ? "center" : "start"),
    flexDirection: ({ home }) => (home ? "column" : "row"),
    gap: ({ home }) => (home ? "20px" : "10px"),
    width: ({ home }) => (home ? "50%" : "40%"),
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
    width: ({ home }) => (home ? "50%" : ""),
    backgroundColor: "white",
    "& :hover": {
      color: "white",
    },
  },
});

const Searcher = ({
  count,
  setArticles,
  setLoading,
  setError,
  setCount,
  search,
  setSearch,
  home,
}) => {
  const { searcherInput, searcherContainer, searcherButton } = useStyles({
    home,
  });

  const onSearch = () => {
    setLoading(true);
    newsQuery({ search, setArticles, setLoading, setError, setCount });
  };

  const onChange = (e) => {
    count === 0 && setCount(-1);
    setSearch(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSearch();
    }
  };

  return (
    <Box className={searcherContainer}>
      <TextField
        role="input"
        placeholder="Ingresa un mínimo de 3 caracteres para comenzar a buscar..."
        variant="outlined"
        className={searcherInput}
        value={search}
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></TextField>
      <Button
        disabled={!search || search.trim().length < 3}
        className={searcherButton}
        onClick={onSearch}
        role="button"
      >
        Buscar
      </Button>
    </Box>
  );
};

export default Searcher;
