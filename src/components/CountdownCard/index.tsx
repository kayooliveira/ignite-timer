import React from 'react'

import * as C from './styles'

interface CountdownCardProps {
  value: number
}

export function CoundownCard({ value }: CountdownCardProps) {
  return <C.CountdownCard>{value}</C.CountdownCard>
}
