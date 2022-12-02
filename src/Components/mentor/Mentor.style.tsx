import styled from "styled-components";

export const MentorStyles = styled.section`
  margin-top: 50px;
  .mentor__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    margin-bottom: 48px;
    @media (min-width: 768px) {
      flex-direction: row;
      h2 {
        width: 100%;
      }
      p {
        width: 100%;
      }
    }
    h2 {
      flex-grow: 1;
      width: 100%;
      @media (min-width: 768px) {
        width: 50%;
      }
    }
    p {
      width: 100%;
      margin-top: 30px;
      @media (min-width: 768px) {
        padding-left: 20px;
        margin-top: 0px;

        width: 50%;
      }
    }
  }
`;
export const MentorData = styled.div`
  display: grid;
  gap: 30px;
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 500px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-template-columns: auto;

  .mentor__card {
    padding: 20px;
    background-color: var(--clr-white);
    border-radius: var(--border-radius);
    img {
      width: 100%;
      aspect-ratio: 1.3;
      object-fit: cover;
      object-position: top center;
      border-radius: var(--border-radius);
    }
    .name {
      text-align: center;

      font-weight: 700;
      font-size: var(--fs-200);
      color: var(--clr-heading);
    }
    .proff {
      text-align: center;
    }
  }
`;
