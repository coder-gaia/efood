class Produto {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]

  constructor(
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    cardapio: Prato[]
  ) {
    this.id = id
    this.titulo = titulo
    this.destacado = destacado
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.cardapio = cardapio
  }
}

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

export default Produto
