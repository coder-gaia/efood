import Tag from '../Tag'
import {
  Button,
  CaptionWrapper,
  Description,
  Infos,
  ProductCard,
  Rate,
  RateWrapper,
  Title
} from './styles'
import star from '../../assets/images/star.png'

export interface TagItem {
  type: string
  children: string
}

interface ProductProps {
  title: string
  description: string
  image: string
  rate?: number | string
  tags?: TagItem[]
}

const Product = ({
  title,
  description,
  image,
  rate = '',
  tags = []
}: ProductProps) => {
  return (
    <ProductCard>
      <img src={image} alt={title} />
      <Infos>
        {tags.map((tags, index) => (
          <Tag key={index} type={tags.type}>
            {tags.children}
          </Tag>
        ))}
      </Infos>
      <CaptionWrapper>
        <Title>{title}</Title>
        <RateWrapper>
          <Rate>{rate}</Rate>
          <img src={star} alt="star-img" />
        </RateWrapper>
      </CaptionWrapper>
      <Description>{description}</Description>
      <Button>Read more</Button>
    </ProductCard>
  )
}

export default Product
