import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
`

export const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 328px;
    padding: 8px;
    font-size: 16px;
    background-color: ${colors.salmon};
    border: none;
  }

  &.error {
    border: 3px solid black;
  }
`

export const SentButton = styled.button`
  width: 328px;
  margin-bottom: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.salmon};

  &:hover {
    background-color: ${colors.white};
    color: ${colors.grey};
  }
`

export const SmallInputsGroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const SmallInputsGroup = styled.div`
  width: 48%;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    background-color: ${colors.salmon};
    border: none;

    &.error {
      border: 3px solid black;
    }
  }
`

export const ThanksNote = styled.p`
  margin-bottom: 10px;
`
