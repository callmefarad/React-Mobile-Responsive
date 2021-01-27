import styled from 'styled-components';
import { Link } from "react-router-dom";


export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid #ff8000; */
  border: none;
  background-color: #ff8000;
  padding: 10px, 0;

  h1 {
    color: white;
    font-family:'Courier New', Courier, monospace;
    margin-left: 15px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  padding-right: 20px;
  align-items: center;
  
`;

export const NavLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  &:hover {
    color: white;
  }
`;