import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageSquareMainContainerStyled = styled(Link)`
  border: 1px solid transparent;
  border-radius: 50px;
`;

export const PageSquareContainerStyled = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PageSquareIconStyled = styled.img`
  width: 100px;
`;

export const PageSquareTextStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
