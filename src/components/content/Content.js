import React from "react";
import bdclOne from '../../images/bdcl-ad.jpeg';
import {
  Container,
  ContentWrapper,
  ContentDesc,
  ImgWrapper,
  TextWrapper,
  Img,
  TextHeader,
  TextBody,
} from "./ContentStyle";

function Content() {
  return (
    <Container>
      <ContentDesc>
        <h1>Free training for the underserved</h1>
      </ContentDesc>
      <ContentWrapper>
        <ImgWrapper>
          <Img src={bdclOne} alt="image1" />
        </ImgWrapper>
        <TextWrapper>
          <TextHeader>
            <h1>coding made simple</h1>
          </TextHeader>
          <TextBody>
            <p>CodeLab is a code base institute that aims at providing quality practical training to the underserved.</p>
          </TextBody>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default Content;
