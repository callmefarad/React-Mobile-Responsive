import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  /* border: 1px solid green; */
`;

export const ContentDesc = styled.div`
  margin: 20px auto;
  width: 90%;
  /* background-color: green; */

  h1 {
    text-transform: uppercase;
    color: black;
    font-size: 20px;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  @media screen and (max-width: 831px) {
    h1 {
      font-size: 20px;
      text-transform: capitalize;
      color: brown;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin: 5px auto;
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1896ba;
  border-radius: 10px;

  @media screen and (max-width: 831px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ff8000;
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;

export const ImgWrapper = styled.ul`
  width: 40%;
  height: 250px;
  /* background-color: grey; */
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  padding-right: 0;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const TextWrapper = styled.ul`
  width: 40%;
  height: 250px;
  /* background-color: grey; */
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 960px){
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const TextHeader = styled.div`
  text-align: center;
  padding-bottom: 5px;

  h1 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-transform: capitalize;
    font-size: 30px;
  }

  @media screen and (max-width: 831px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const TextBody = styled.div`
  text-align: center;
  padding: 5px 5px 5px 5px;

  p {
    font-size: 20px;
    line-height: 30px;
  }

  @media screen and (max-width: 831px) {
    p {
      font-size: 15px;
      line-height: 20px;
    }
  }
`;