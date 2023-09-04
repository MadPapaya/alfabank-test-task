import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  body {
    overflow-x: hidden;
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    transition: background .2s ease-in-out;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`