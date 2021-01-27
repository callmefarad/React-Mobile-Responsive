import React from "react";
import { HeaderWrapper, LinkWrapper, NavLink } from './HeaderStyle';

function Header() {
    return (
      <HeaderWrapper>
        <h1>Logo</h1>
        <LinkWrapper>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </LinkWrapper>
      </HeaderWrapper>
    ); 
}

export default Header;
