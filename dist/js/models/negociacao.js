export class negociacaoExterna {
  #data;
  #quantidade;
  #valor;

  constructor(data, quantidade, valor) {
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
  }
}
