import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import { Box } from "@material-ui/core";

import ResultsTable from "./components/ResultsTable";
import Searcher from "./components/Searcher";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppScreen from "./views/AppScreen";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  return <AppScreen />;
};

export default App;
