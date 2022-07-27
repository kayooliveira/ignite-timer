import { Countdown } from '@components/Countdown'
import { Play } from 'phosphor-react'
import React from 'react'

import * as C from './styles'
export function TaskForm() {
  return (
    <C.TaskForm>
      <C.TaskFormHeader>
        <C.TaskFormSpan>Vou trabalhar em</C.TaskFormSpan>
        <C.TaskTitleInput placeholder="Dê um nome para o seu projeto" />
        <C.TaskFormSpan>durante</C.TaskFormSpan>
        <C.TaskMinutesAmount
          type="number"
          step={5}
          min={5}
          max={60}
          placeholder="00"
        />
        <C.TaskFormSpan>minutos.</C.TaskFormSpan>
      </C.TaskFormHeader>
      <Countdown minutesAmount={0} secondsAmount={0} />
      <C.TaskFormButton>
        <Play size="26" /> Começar
      </C.TaskFormButton>
    </C.TaskForm>
  )
}
