import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: 550px) {
    padding: 0 10px;
  }
`

export const H2 = styled.h2`
  font-size: 24px;
  line-height: 150%;
  font-weight: 500;
  margin-bottom: 30px;

  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
`

export const SaveBtn = styled.button`
  display: block;
  width: max-content;
  font-size: 20px;
  line-height: 150%;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.textColorAccent};
  border-radius: 15px;
  padding: 10px 40px;
  cursor: pointer;
  margin: 60px auto 0;
  text-decoration: none;
  transition: .3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.textColorAccent};
    color: ${props => props.theme.backgroundColor};
  }
`

export const Input = styled.input`
  display:block;
  border: 2px solid ${props => props.theme.textColorAccent};
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

export const Textarea = styled(Input)`
  resize: none;
  height: 300px;
  max-width: 100%;
`

export const InputError = styled.span`
  display: block;
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme.textColorAccent};
  text-align: center;
`