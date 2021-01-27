import styled from 'styled-components';


export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #ff8000;
  background-color: #ff8000;
  padding: 10px, 0;

  h1 {
    color: white;
    margin-left: 10px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  padding-right: 30px;
  
`;

export const NavLink = styled.ul`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;