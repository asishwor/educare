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
      display: grid;
      text-align: start;
      padding: 30px;
      background-color: var(--clr-white);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      place-content: start;
      .title {
        margin-top: 30px;
      }
      .content {
        margin: 0;
        margin-top: 30px;
        font-size: var(--fs-200);
      }
      svg {
        font-size: 58px;
        padding: 12px;
        background-color: var(--clr-primary);
        color: var(--clr-white);
        border-radius: var(--border-radius);
      }
    }
  }
`;
