import { CountdownBlock } from '@components/CountdownBlock'
import { CountdownCard } from '@components/CountdownCard/styles'
import { CountdownSeparator } from '@components/CountdownSeparator'
import React from 'react'

import * as C from './styles'

interface CountdownProps {
  minutesAmount: number
  secondsAmount: number
}

export function Countdown({ minutesAmount, secondsAmount }: CountdownProps) {
  const minutes = minutesAmount.toString().padStart(2, '0').split('')
  const seconds = secondsAmount.toString().padStart(2, '0').split('')

  return (
    <>
      <C.CountdownContainer>
        <CountdownBlock>
          {minutes.map((digit, index) => (
            <CountdownCard key={index}>{digit}</CountdownCard>
          ))}
        </CountdownBlock>
        <CountdownSeparator />
        <CountdownBlock>
          {seconds.map((digit, index) => (
            <CountdownCard key={index}>{digit}</CountdownCard>
          ))}
        </CountdownBlock>
      </C.CountdownContainer>
    </>
  )
}
