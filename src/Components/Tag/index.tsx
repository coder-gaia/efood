import { TagContainer, TagProps } from './styles'

const TagElement = ({ type, children }: TagProps) => {
  return <TagContainer type={type}>{children}</TagContainer>
}

export default TagElement
