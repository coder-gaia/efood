import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../../Components/Plates/styles'

export const Form = styled.form`
  padding: 0;
  margin: 0 auto;
  margin-left: 4px;
  overflow-x: hidden;

  ${Button} {
    width: 320px;
    margin: 0 auto;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 8px;

`

export const MainRow = styled.div`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;

  input {
    width: 320px;
    height: 32px;
    background-color: ${colors.salmon};
    border: none;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`
export const SecRow = styled.div`
  display: flex;
  margin-bottom: 16px;
  color: ${colors.salmon};

  label,
  input {
    display: block;
    margin-right: 24px;
    margin-bottom: -8px;
    width: 145px;
    height: 32px;
    font-weight: bold;
  }

  input {
    background-color: ${colors.salmon};
    border: none;
  }

  .cardNum {
    input {
      width: 190px;
    }
  }

  .cvv {
    margin-left: 24px;

    input {
      width: 80px;
    }
  }

  .year {
    input {
      margin-left: 4px;
    }
  }
`
export const InputWrapper = styled.div``

export const Wrapper = styled.div`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;

  input {
    width: 320px;
    height: 32px;
    background-color: ${colors.salmon};
    border: none;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`
