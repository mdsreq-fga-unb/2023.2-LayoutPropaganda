import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 32px;

`
export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  gap: 100px;
  margin-left: auto;
  a {
    text-decoration: none;
    color: inherit;
    font-size: 1.8rem;
    transition: 0.2s;
    border: 0%;
    
    &:hover {
      border: 100%;
      border-bottom: 2px solid #fff;
    }
  }
`;

export const Logo = styled(Link) `
/* padding: 30px; */
`;
