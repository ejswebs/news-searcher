export const newsQuery = async ({
  search,
  setArticles,
  setLoading,
  setError,
  setCount,
}) => {
  setLoading(true);

  const API_KEY = "f594ddf8def94bcbad45f3bf22049f5b";
  const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}&language=es`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status === "ok") {
    setArticles(data.articles);
    setCount(data.totalResults);
    setError(null);
    setLoading(false);
  } else if (data.status === "error") {
    setError(data.message);
    setCount(0);
    setLoading(false);
  }
};
