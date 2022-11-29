import styled from "styled-components";

export const GoalsCardWrapper: any = styled.div`
  padding: 90px 0;
  text-align: center;
  p {
    width: min(650px, 100%);
    margin: 30px auto;
    line-height: 1.9em;
  }
  .goals__cardWrapper {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
    .card {
      padding: 20px;
      background-color: var(--clr-white);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      svg {
        font-size: 58px;
        padding: 12px;
        border-radius: var(--border-radius);
      }
    }
  }
`;
