import React from 'react';
import styled from 'styled-components'

const StyledNav = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    background: ${(props) => props.background};
    color: ${(props) => props.text};
    grid-template-columns: 1fr auto;
    z-index: 1000;
    box-sizing: border-box;

    .logo {
        font-weight: 500;
        grid-row: 1;
        grid-column: 1;
        color: #fc0054;
    }

    .links {
        grid-row: 1;
        grid-column: 2;

        a {
            text-decoration: none;
            color: black;
            margin-left: 10px;

            &::visited {
                color: black;
            }
        }
    }
`

export default function Navbar({children, brand, background, text}) {
    return (
        <StyledNav background = {background} text = {text}>
            <span className="logo">{brand}</span>
            <div className="links">
                {children}
            </div>
        </StyledNav>
    )
}
