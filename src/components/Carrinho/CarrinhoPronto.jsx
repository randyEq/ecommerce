import React from "react";
import {
  StyledContainerButtonCart,
  StyledTextoButtonCart,
} from "./ButtonImg/ButtonImg";
import { GlobalContext } from "../../GlobalContext";
import CarrinhoOnProduct from "./CarrinhoOnProduct";

const CarrinhoPronto = ({ quantidade, id }) => {
  const {
    setarTotal,
    decremento,
    adicionaProdutosNoCarrinho,
    setQuantidadeDoProduto,
  } = React.useContext(GlobalContext);
  const [itemCarrinho, setItemCarrinho] = React.useState(quantidade);
  const [itens, setItens] = React.useState(0);

  function setarWrapper() {
    setItemCarrinho(1);
    setItens(1);
    setarTotal();
    adicionaProdutosNoCarrinho(id, itens);
  }

  function aumentaQuantidade() {
    setItens(itens + 1);
    setarTotal();
    adicionaProdutosNoCarrinho(id, itens);
  }

  function diminuiQuantidade() {
    setItens(itens - 1);
    if (itens === 1) {
      setItemCarrinho(0);
    }
    decremento();
    setQuantidadeDoProduto((valorAnterior) => valorAnterior - 1);
  }

  return (
    <>
      {itemCarrinho === 0 ? (
        <StyledContainerButtonCart
          $quantidade={itemCarrinho}
          onClick={setarWrapper}
        >
          <img src="./src/assets/images/icon-add-to-cart.svg" />
          <StyledTextoButtonCart>Add to Cart</StyledTextoButtonCart>
        </StyledContainerButtonCart>
      ) : (
        <CarrinhoOnProduct
          quantidadeItens={itens}
          aumentaQuantidade={aumentaQuantidade}
          diminuiQuantidade={diminuiQuantidade}
        />
      )}
    </>
  );
};

export default CarrinhoPronto;
