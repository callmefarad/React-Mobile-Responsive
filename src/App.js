import React from "react";
import GlobalStyle from "./GlobalStyle";
import { AppWrapper } from "./AppStyle";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Content />
      </AppWrapper>
    </Router>
  );
}

export default App;
