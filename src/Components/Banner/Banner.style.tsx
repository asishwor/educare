import styled from "styled-components";

export const BannerStyle = styled.div`
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
  flex-direction: column-reverse;
  padding: 100px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .banner__left {
    margin-top: 30px;
    padding-right: 0;

    @media (min-width: 992px) {
      padding-right: 30px;
      margin-top: 0;
      width: 40%;
    }
    h1 {
      font-size: var(--fs-700);
    }
    p {
      font-size: var(--fs-300);
      line-height: 2em;
      margin-bottom: 48px;
    }
  }
  .banner__right {
    position: relative;

    @media (min-width: 992px) {
      width: 60%;
      margin-left: 45px;
      right: 40px;
      video {
      object-fit: cover;
      aspect-ratio: 1.6;
      width:90%;

      }
    }
    video {
      height: 100%;
      box-shadow: var(--box-shadow);
      border-radius: var(--border-radius);
      border: 7px solid var(--clr-white);
      border-radius: var(--border-radius);
    }
    &::after {
    }
  }
`;
export const BannerHeaderContainer = styled.div`
  position: relative;
  &::after {
    @media (min-width: 992px) {
      content: "";
    }
    position: absolute;
    top: 0;
    right: 0;
    /* content: none; */
    z-index: -1;
    height: 100%;
    width: 52%;
    background-color: var(--clr-primary);
  }
`;
