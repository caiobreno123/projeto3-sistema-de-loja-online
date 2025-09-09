class Pedido {
  constructor(cliente, produtos) {
    this.cliente = cliente;
    this.produtos = produtos;
  }

  calcularTotal() {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

module.exports = Pedido;
