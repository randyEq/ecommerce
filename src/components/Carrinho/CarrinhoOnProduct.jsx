import React from "react";
import {
  StyledButtonOnProduct,
  StyledButtonOnProductIncDec,
  StyledspanIncDec,
} from "./ButtonImg/ButtonImg";

const CarrinhoOnProduct = ({
  quantidadeItens,
  aumentaQuantidade,
  diminuiQuantidade,
}) => {
  return (
    <StyledButtonOnProduct $itens={quantidadeItens}>
      <StyledButtonOnProductIncDec>
        <StyledspanIncDec onClick={aumentaQuantidade}>
          <img src="./src/assets/images/icon-increment-quantity.svg" />
        </StyledspanIncDec>
        <span>{quantidadeItens}</span>
        <StyledspanIncDec onClick={diminuiQuantidade}>
          <img src="./src/assets/images/icon-decrement-quantity.svg" />
        </StyledspanIncDec>
      </StyledButtonOnProductIncDec>
    </StyledButtonOnProduct>
  );
};

export default CarrinhoOnProduct;
