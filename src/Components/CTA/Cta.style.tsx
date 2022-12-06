import styled from "styled-components";

export const CtaStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #04061d;
  color: var(--clr-body-font);
  border-radius: var(--border-radius);
  margin-bottom: 70px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  h3 {
    color: var(--clr-white);
    font-size: var(--fs-600);
    line-height: 1.8em;
    margin-bottom: 20px;
  }
  .cta {
    &__left {
      margin-bottom: 50px;

      @media (min-width: 768px) {
        width: 60%;
        margin-bottom: 0px;
      }
      .btn {
        margin-top: 32px;
      }
    }

    //right side content
    &__right {
      position: relative;
      @media (max-width: 767px) {
        width: 80%;
      }
      &-image {
        margin: 0 auto;
        height: 100%;
        object-fit: contain;
        @media (min-width: 768px) {
          width: 200px;
        }

        img {
          border-radius: var(--border-radius);
        }
      }
      &-design {
        height: 100%;
        width: 100%;
        span {
          display: inline-block;
          position: absolute;
          &:nth-of-type(1) {
            top: -1px;
            left: -55px;
            height: 40px;
            width: 40px;
            background-color: #f8b17f;
            border-radius: 50%;
          }
          &:nth-of-type(2) {
            top: -19px;
            right: -26px;
            height: 45px;
            width: 45px;
            rotate: -9deg;
            background-color: transparent;
            border-radius: 50%;
            border: 8px solid transparent;
            border-top: 8px solid #f1794e;
            border-right: 8px solid #f1794e;
          }
          &:nth-of-type(3) {
            bottom: -27px;
            left: -42px;
            height: 0;
            width: 0;
            rotate: 48deg;
            border: 30px solid transparent;
            border-bottom: 30px solid var(--clr-primary);
            border-radius: 50%;
          }
          &:nth-of-type(4) {
            bottom: -31px;
            right: -27px;

            height: 25px;
            width: 25px;
            background-color: #abec66c9;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;
