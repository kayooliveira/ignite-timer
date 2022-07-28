import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea {
  font-family: 'Roboto', 'sans-serif';
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.background}
}

:focus {
  outline: none;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
}
`
