import styled from "styled-components";

export const CoursesPageContent = styled.div`
  @media (min-width: 992px) {
    padding: 100px 70px;
  }
  padding: 80px 0;
  background: url(./images/teacher.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  color: var(--clr-white);
  margin-bottom: 30px;
  .overlay {
    background-color: #3339;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  h2 {
    color: var(--clr-white);
    position: relative;
    font-size: var(--fs-500);
    z-index: 125;
    margin-bottom: 14px;
    @media (min-width: 992px) {
      font-size: var(--fs-700);
    }
  }
  p {
    font-size: var(--fs-200);
    line-height: 1.7em;
    text-align: center;
    width: min(1000px, 100%);
    margin: 0 auto;
    position: relative;
    z-index: 125;
    @media (min-width: 992px) {
      font-size: var(--fs-300);
    }
  }
`;
