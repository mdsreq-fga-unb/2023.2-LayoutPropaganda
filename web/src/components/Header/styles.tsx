import styled from "styled-components"

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
`
export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  gap: 50px;

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logo = styled.div `
padding: 15px;
`