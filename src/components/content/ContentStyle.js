import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid green;
`;

export const ContentDesc = styled.div`
  margin: 20px auto;
  width: 90%;
  /* background-color: green; */

  h1 {
    color: brown;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ContentWrapper = styled.div`
  margin: 5px auto;
  width: 90%;
  display: flex;
  justify-content: center;
  background-color: red;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #00d2d2;
  }
`;

export const ImgWrapper = styled.ul`
  width: 40%;
  height: 150px;
  background-color: grey;
  margin: 10px;
`;

export const TextWrapper = styled.ul`
  width: 40%;
  height: 150px;
  background-color: grey;
  margin: 10px;
`;
