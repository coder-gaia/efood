import { TagItem } from '../Components/Product'

class Produto {
  id: number
  title: string
  description: string
  image: string
  rate?: number
  tags?: TagItem[]

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    rate: number,
    tags: string[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.rate = rate
    this.tags = tags.map((tag) => ({ type: tag, children: tag }))
  }
}

export default Produto
