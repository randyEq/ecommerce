import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  // Dados da API
  const [dados, setDados] = React.useState(null);
  const [ids, setIds] = React.useState([]);

  React.useEffect(() => {
    async function puxarDados() {
      try {
        const dadosOk = await fetch("/src/assets/data/data.json");
        const json = await dadosOk.json();
        const ids = json.map((dado) => dado.id);
        setIds(ids);
        setDados(json);
      } catch (error) {
        console.error("Erro no consumo da API:", error);
      }
    }

    puxarDados();
  }, []);

  // Telas pra responsividade
  const [larguraUsuario, setLarguraUsuario] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function modificaLargura() {
      setLarguraUsuario(window.innerWidth);
    }
    window.addEventListener("resize", modificaLargura);
    return () => {
      removeEventListener("resize", modificaLargura);
    };
  }, [window.innerWidth]);

  //Total de itens no Carrinho

  const [totalItems, setTotalItems] = React.useState(0);

  function setarTotal() {
    setTotalItems(totalItems + 1);
  }

  function decremento() {
    setTotalItems(totalItems - 1);
  }

  const [quantidade, setarQuantidade] = React.useState(0);

  function setarQuantidadeGlobal() {
    setarQuantidade(quantidade + 1);
  }

  function tirarQuantidadeGlobal() {
    setarQuantidade(quantidade - 1);
  }

  //Estilo do Cart button

  let [nomeDoProduto, setNomeDoProduto] = React.useState(null);
  let [precoDoProduto, setPrecoDoProduto] = React.useState(null);
  let [quantidadeDoProduto, setQuantidadeDoProduto] = React.useState(0);

  function adicionaProdutosNoCarrinho(id, quantidade) {
    if (dados[id].name && dados[id].price !== null) {
      setNomeDoProduto(dados[id].name);
      setPrecoDoProduto(dados[id].price);
      setQuantidadeDoProduto(quantidade + 1);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        dados,
        larguraUsuario,
        totalItems,
        setarTotal,
        decremento,
        quantidade,
        setarQuantidadeGlobal,
        tirarQuantidadeGlobal,
        adicionaProdutosNoCarrinho,
        setNomeDoProduto,
        setPrecoDoProduto,
        setQuantidadeDoProduto,
        quantidadeDoProduto,
        precoDoProduto,
        nomeDoProduto,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
