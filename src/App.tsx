import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
