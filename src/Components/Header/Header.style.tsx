import styled from "styled-components";

export const Nav = styled.div`
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    gap: 30px;
    background-color: transparent;
    width: 100%;
    height: auto;
  }
  justify-content: space-between;
  width: min(400px, 100%);
  height: 100vh;
  background-color: var(--clr-primary);
  flex-direction: column;
  display: flex;
  align-items: start;
  padding: 15px 0;
`;
export const Logo = styled.div`
  height: 70px;
  width: 100px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
`;
// navlist
export const NavList = styled.ul`
  @media (min-width: 992px) {
    flex-direction: row;
  }
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 40px;
  a {
    @media (min-width: 992px) {
      color: inherit;
      display: inline-block;
    }
    display: block;
    color: var(--clr-body-bg);
    text-align: start;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
