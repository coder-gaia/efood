import {
  Button,
  CaptionWrapper,
  Description,
  ProductCard,
  Rate,
  RateWrapper,
  Title
} from './styles'

export interface TagItem {
  type: string
  children: string
}

interface SellingProductProps {
  title: string
  description: string
  image: string
  rate?: number | string
  tags?: TagItem[]
}

const SellingProduct = ({
  title,
  description,
  image,
  rate
}: SellingProductProps) => {
  return (
    <ProductCard>
      <img src={image} alt={title} />
      <CaptionWrapper>
        <Title>{title}</Title>
        {rate && (
          <RateWrapper>
            <Rate>{rate}</Rate>
          </RateWrapper>
        )}
      </CaptionWrapper>
      <Description>{description}</Description>
      <Button>Add to Cart</Button>
    </ProductCard>
  )
}

export default SellingProduct
