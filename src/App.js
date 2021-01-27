import React from 'react';
import { AppWrapper } from './AppStyle';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <AppWrapper>
      <Header />
      <Content />
    </AppWrapper>
    </Router>
  );
}

export default App;
