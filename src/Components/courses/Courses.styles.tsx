import styled from "styled-components";

export const CousesStyles: any = styled.div`
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ((min-width: 768px) and (max-width:  992px)) {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-template-columns: auto;

  display: grid;
`;
