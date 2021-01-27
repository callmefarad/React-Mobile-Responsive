import React from 'react';
import { AppWrapper } from './AppStyle';
import Header from "./components/header/Header";
import Content from "./components/content/Content";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Content />
    </AppWrapper>
  );
}

export default App;
