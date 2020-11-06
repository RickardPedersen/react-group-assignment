import React from "react";
import styled from "styled-components/macro";
import { TextStyle, HeadingStyle } from './partials/GeneralStyles';

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  background: ${({theme}) => theme.colors.gray1};
  grid-template-columns: 1fr auto;
  z-index: 10;
  box-sizing: border-box;

  .logo {
    font-weight: 500;
    grid-row: 1;
    grid-column: 1;
    ${HeadingStyle}
  }

  .links {
    grid-row: 1;
    grid-column: 2;

    a {
      text-decoration: none;
      ${TextStyle};
      margin-left: 10px;

      &::visited {
        ${TextStyle};
      }
    }
  }
`;

export default function Navbar({ children, brand, background, text }) {
  return (
    <StyledNav background={background} text={text}>
      <span className="logo">{brand}</span>
      <div className="links">{children}</div>
    </StyledNav>
  );
}
