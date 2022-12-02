import styled from "styled-components";

export const TestiomialsStyles = styled.section`
  padding: 40px 0;
  .testimonials {
    @media (min-width: 992px) {
      flex-direction: row;
    }
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0 40px;

    img {
      max-width: 100%;
    }

    /* slider  left side */

    &__image {
      width: min(500px, 100%);
      position: relative;
      z-index: 2;
      height: 100%;
      margin-bottom: 50px;
      @media (min-width: 992px) {
        margin: 0;
        width: 300px;
        flex-direction: row;
      }
      img {
        border-radius: var(--border-radius);
        position: relative;
        z-index: 4;
        height: 100%;
        width: 100%;
      }
      &::after,
      &::before {
        content: "";
        border-color: transparent;
        z-index: 1;
        border-radius: 50%;
        z-index: 1;
        position: absolute;
      }
      &::after {
        height: 0;
        width: 0;
        border-left: 35px solid var(--clr-body-bg);
        border-bottom: 35px solid var(--clr-body-bg);
        border-right: 35px solid var(--clr-body-bg);
        border-top: 35px solid var(--clr-orange);
        background-color: transparent;

        top: -22px;
        right: -25px;
        rotate: 47deg;
      }
      &::before {
        background-color: var(--clr-primary);
        left: -30px;
        bottom: -25px;
        height: 80px;
        width: 80px;
      }
    }
    &__content {
      width: min(600px, 100%);
      padding-left: 100px;
      text-align: center;

      @media (min-width: 992px) {
        text-align: start;
      }
      &-reviews {
        display: flex;
        align-items: center;
        color: var(--clr-orange);
        margin-top: 30px;
        .starCount {
          padding-left: 10px;
        }
        @media (max-width: 992px) {
          justify-content: center;
          line-height: 1;
        }
      }
      &-reviewer {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
        @media (max-width: 992px) {
          justify-content: center;
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .name {
          font-weight: 700;
          color: var(--clr-heading);
          font-size: var(--fs-200);
        }
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    padding: 5px;
    right: 70px;
    left: unset;
    bottom: 0;
    top: unset;
    &::after {
      content: none;
    }
  }
  .swiper-button-next {
    right: 0;
    &:hover ~ .navigation .next {
      background-color: white;
      color: var(--clr-primary);
      border-color: var(--clr-primary);
    }
    &.swiper-button-disabled ~ .navigation .next {
      background-color: #4d58689e;
      cursor: auto;
    }
  }
  .swiper-button-prev {
    right: 70px;
    &:hover ~ .navigation .prev {
      background-color: white;
      color: var(--clr-primary);
      border-color: var(--clr-primary);
    }
    &.swiper-button-disabled ~ .navigation .prev {
      background-color: #4d58689e;
      cursor: auto;
    }
  }
  .navigation {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;
    button {
      border: 1px solid transparent;
      color: var(--clr-white);
      padding: 8px 7px;
      cursor: pointer;
      line-height: 0;
      border-radius: 50%;
      background-color: var(--clr-primary);
    }
  }
`;
