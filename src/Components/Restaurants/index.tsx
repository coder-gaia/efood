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
import { Link } from 'react-router-dom'

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
  id: number
}

const Establishment = ({
  title,
  description,
  image,
  id,
  rate = '',
  tags = []
}: ProductProps) => {
  const getDescription = (description: string) => {
    if (description.length > 180) {
      return description.slice(0, 177).concat('...')
    }
    return description
  }

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
      <Description>{getDescription(description)}</Description>
      <Link to={`/courses/${id}`}>
        <Button>See courses</Button>
      </Link>
    </ProductCard>
  )
}

export default Establishment
