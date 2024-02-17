export class Prato {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string

  constructor(
    foto: string,
    preco: number,
    id: number,
    nome: string,
    descricao: string,
    porcao: string
  ) {
    this.foto = foto
    this.preco = preco
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.porcao = porcao
  }
}

export default Prato
