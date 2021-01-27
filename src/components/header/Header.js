import React from "react";
import { HeaderWrapper, LinkWrapper, NavLink } from './HeaderStyle';

function Header() {
    return (
      <HeaderWrapper>
        <h1>Logo</h1>
        <LinkWrapper>
          <NavLink>
            Home
          </NavLink>
          <NavLink>
            About
          </NavLink>
          <NavLink>
            Contact
          </NavLink>
        </LinkWrapper>
      </HeaderWrapper>
    ); 
}

export default Header;
