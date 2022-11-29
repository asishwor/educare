import styled from "styled-components";

export const Nav = styled.div`
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    gap: 30px;
    background-color: transparent;
    width: 100%;
    height: auto;
    justify-content: space-between;
    padding: 15px 0;
  }

  justify-content: flex-start;
  width: min(400px, 100%);
  height: 100vh;
  background-color: var(--clr-primary);
  flex-direction: column;
  display: flex;
  align-items: start;
  padding: 20px;
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
    align-items: center;
    gap: 50px;
    margin-top: 0px;
    & > li:nth-of-type(4) {
      a {
        color: var(--clr-white);
      }
    }
  }
  flex-direction: column;
  display: flex;
  gap: 20px;
  margin-top: 20px;
  align-items: flex-start;

  & > li a {
    @media (min-width: 992px) {
      color: inherit;
    }
    color: var(--clr-white);
    display: block;
    text-align: start;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  display: flex;
  gap: 30px;
  line-height: 1em;
  flex-direction: column;

  .btn-primary {
    @media (min-width: 992px) {
      flex-direction: row;
      background-color: var(--clr-primary);
      align-items: center;
    }
    background-color: transparent;
    border-color: #ffffff;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;
