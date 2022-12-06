import styled from "styled-components";

export const SinglePageContent = styled.section`
  .banner {
    position: relative;
    padding: 150px 0 30px;
    background: url(./images/course1.jpg);
    h2 {
      color: #00262b;
      position: relative;
      line-height: 1;
      z-index: 125;
      font-weight: 700;
      @media (min-width: 768px) {
        font-size: var(--fs-800);
      }
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: #c0c4c5e0;
      width: 100%;
    }
  }
  .stickyContent {
    box-shadow: 0 5px 10px #3339;
    z-index: 100;
    position: relative;
    background-color: #00262b;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: var(--transition);

    @media (min-width: 768px) {
      flex-direction: row;
    }

    &-section {
      background-color: var(--clr-white);
      transition: var(--transition);

      & .sticky {
        position: fixed;
        transition: var(--transition);
        top: 0px;
        left: 0;
        width: 100%;
        padding: auto;
        margin: 0 auto;
        z-index: 999;
        .stickyContent__logo {
          display: none;
        }
        .stickyContent__right {
          justify-content: center;

          & > .stickyContent__right-bth {
            display: none;
          }
        }
      }
    }
    &__logo {
      background-color: var(--clr-white);
      height: 100%;
      flex-grow: 0.5;
      display: flex;
      padding: 10px 0;
      justify-content: flex-end;
      @media (max-width: 767px) {
        width: 100%;
        justify-content: flex-start;
      }
    }

    &__right {
      flex-grow: 2;
      display: flex;
      flex-direction: column;
      gap: 30px;
      width: 100%;
      @media (min-width: 700px) {
        flex-direction: row;
        align-items: center;
        width: auto;
        gap: 0px;
      }
      &-content {
        @media (min-width: 768px) {
          flex-direction: row;
          max-width: 300px;
        }

        padding: 0 15px;
        color: var(--clr-white);
        margin-right: 20%;

        h4 {
          color: var(--clr-white);
          font-weight: 400;

          font-size: var(--fs-500);
        }
      }
    }
    &__btn {
      border-color: transparent;
      display: flex;
      align-items: center;
      line-height: 1;
      color: #18404c;
      font-size: 14px;
      font-weight: 700;
      padding: 5px 30px;
      border-radius: 0;
    }
  }
`;

//learning section styles
export const LearningStyle = styled.section`
  padding-top: 50px;
  background: #f7f5f5;
  padding: 30px;
  h3 {
    color: #00262b;
    font-size: var(--fs-500);
  }
  ul {
    padding: 20px;
    display: grid;
    gap: 12px;
    font-size: var(--fs-300);
    color: #464646;
    line-height: 1.85em;
  }
  li {
    list-style: disc;
    &::marker {
      color: #454545;
      font-size: 22px;
    }
  }
  .learningContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 768px) {
      flex-direction: row;
    }
    &__list {
      @media (min-width: 768px) {
        width: 66.67%;
      }
      margin-right: 15px;
      display: grid;
      place-items: start;
      .playBtn {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 3px 15px;
        background-color: var(--clr-white);
        border-color: transparent;
        box-shadow: var(--box-shadow);
        &:hover {
          color: var(--clr-white);
          background-color: #00262b;
          transition: var(--transition);
        }
      }
    }
    &__info {
      display: grid;
      gap: 20px;
      position: sticky;
      top: 50px;
      left: 0;
      align-self: self-start;

      .courses {
        display: flex;
        align-items: center;
        gap: 20px;
        svg {
          padding: 5px 7px;
          background-color: #0002;
          font-size: 40px;
          border-radius: 50%;
          color: var(--clr-heading);
        }
        h4 {
          line-height: 1.5em;
          font-size: var(--fs-200);
        }
      }
    }
  }
`;
