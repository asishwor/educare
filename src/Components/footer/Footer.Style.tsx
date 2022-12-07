import styled from "styled-components";

export const Footer = styled.footer`
  .footer {
    display: grid;
    padding: 60px 0;
    @media (min-width: 768px) {
      grid-template-columns: repeat(12, 1fr);
    }
    @media (max-width: 400px) {
      grid-template-columns: auto;
    }
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    &__info {
      @media (min-width: 768px) {
        grid-column: 1/4;
      }
    }
    &__logo {
      width: 100px;
      height: 100px;
      object-fit: contains;
    }
    .appLink {
      display: flex;
      align-items: center;
      margin-top: 18px;

      .playstore {
        img {
          height: 40px;
          object-fit: cover;
        }
      }
      .appStore {
        img {
          height: 50px;
          object-fit: cover;
        }
      }
    }
    h4 {
      margin-bottom: 25px;
      font-size: var(--fs-200);
    }
    li {
      padding-bottom: 10px;
    }
    a {
      font-size: 14px;
      cursor: pointer;
      @media (min-width: 768px) {
        grid-template-columns: repeat(12, 1fr);
      }
    }
    // quick links
    &__quickLinks {
      @media (min-width: 768px) {
        grid-column: 5/7;
      }
    }
    &__otherLinks {
      @media (min-width: 768px) {
        grid-column: 7/9;
      }
    }
    &__community {
      @media (min-width: 768px) {
        grid-column: 10/13;
      }
    }
  }
`;
