import styled from "styled-components";

export const StyledContainerButtonCart = styled.div`
  background-color: white;
  width: 50%;
  height: 10%;
  max-width: 300px;
  position: absolute;
  bottom: 130px;
  right: 25%;
  display: ${(props) => (props.$quantidade <= 0 ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 25px;
  border: 1px solid hsl(7, 20%, 60%);
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    filter: grayscale(0.5);
  }
`;

export const StyledTextoButtonCart = styled.span`
  color: black;
  font-weight: 600;
`;

export const StyledButtonOnProduct = styled.div`
  background-color: hsl(14, 86%, 42%);
  width: 50%;
  height: 10%;
  max-width: 300px;
  position: absolute;
  bottom: 130px;
  right: 26%;
  display: ${(props) => (props.$itens > 0 ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border: 1px solid transparent;
  color: white;
  transition: 0.2s;
`;

export const StyledButtonOnProductIncDec = styled.span`
  display: flex;
  transition: 0.2s;
  gap: 3rem;
`;

export const StyledspanIncDec = styled.span`
  display: flex;
  align-self: center;
  cursor: pointer;
  transition: 0.2s;
`;
