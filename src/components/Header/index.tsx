import timerLogo from '@assets/img/logo.png'
import { Scroll, Timer } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

import * as C from './styles'

export function Header() {
  return (
    <C.Header>
      <Link to="/">
        <C.Logo src={timerLogo} alt="" />
      </Link>
      <C.NavLinks>
        <C.NavLink to="/">
          <Timer size="22" />
        </C.NavLink>
        <C.NavLink to="/historico">
          <Scroll size="22" />
        </C.NavLink>
      </C.NavLinks>
    </C.Header>
  )
}
