import React from 'react'

import * as C from './styles'

interface CountdownBlockProps {
  children: React.ReactNode
}

export function CountdownBlock({ children }: CountdownBlockProps) {
  return <C.CountdownBlock>{children}</C.CountdownBlock>
}
