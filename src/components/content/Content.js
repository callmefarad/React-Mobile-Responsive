import React from "react";
import {
  Container,
  ContentWrapper,
  ContentDesc,
  ImgWrapper,
  TextWrapper,
} from "./ContentStyle";

function Content({changeColor}) {
  return (
    <Container>
      <ContentDesc>
        <h1>Content Description</h1>
      </ContentDesc>
      <ContentWrapper>
        <ImgWrapper>image</ImgWrapper>
        <TextWrapper>text</TextWrapper>
        <TextWrapper>text</TextWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default Content;
