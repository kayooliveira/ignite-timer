import timerLogo from '@assets/img/logo.png'
import { Scroll, Timer } from 'phosphor-react'
import React from 'react'

import * as C from './styles'

export function Header() {
  return (
    <C.Header>
      <C.Logo src={timerLogo} alt="" />
      <C.NavLinks>
        <C.NavLink title="Timer" to="/">
          <Timer size="22" />
        </C.NavLink>
        <C.NavLink title="Histórico" to="/historico">
          <Scroll size="22" />
        </C.NavLink>
      </C.NavLinks>
    </C.Header>
  )
}
