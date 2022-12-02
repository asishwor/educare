import styled from "styled-components";

export const CousesStyles = styled.div`
  margin-bottom: 30px;
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 48px;
  }
  @media ((min-width: 768px) and (max-width:  992px)) {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-template-columns: auto;
  margin-top: 40px;
  display: grid;
  gap: 30px;
  img {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    height: 200px;
    object-fit: cover;
    width: 100%;
  }
  .courses__card {
    border-radius: var(--border-radius);
    background-color: var(--clr-white);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      box-shadow: 0 0 12px #000700;
      transition: var(--transition);
    }
    .title {
      font-size: var(--fs-100);
      line-height: 1.45em;
      font-weight: 600;
      margin-top: 12px;
      margin-bottom: 5px;
    }
    &-ratingsInfo {
      display: flex;
      align-items: center;
      margin: 10px 0;
      font-size: 14px;
      line-height: 1em;
      gap: 5px;
      & > .ratings {
        color: var(--clr-orange);
        display: flex;
        align-items: center;
        gap: 3px;

        svg {
          font-size: var(--fs-300);
          line-height: 3em;
          padding-bottom: 3px;
        }
      }
      .enrolledStudent {
        margin-left: auto;
        color: var(--clr-heading);
      }
    }

    &-ratingsInfo,
    .title {
      padding: 0 20px;
    }
    &-lectureInfo {
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: flex;
        align-items: center;
        gap: 5px;
        &:nth-of-type(1) {
          svg {
            color: var(--clr-pink);
          }
        }
        &:nth-of-type(2) {
          svg {
            color: var(--clr-orange);
          }
        }
        &:nth-of-type(3) {
          svg {
            color: var(--clr-primary);
          }
        }
      }
    }
  }
  .teacher {
    &__info {
      margin: 20px;
      border-top: 1px solid #0001;
      padding: 20px 0;
      display: flex;
      align-items: center;
      gap: 20px;
      .coursePrice {
        margin-left: auto;
        font-weight: 700;
        font-size: var(--fs-300);
        color: var(--clr-primary);
      }
      &-name {
        font-weight: 600;
        color: var(--clr-heading);
        font-size: var(--fs-300);
        letter-spacing: 0.7px;
      }
    }
    &__image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;
