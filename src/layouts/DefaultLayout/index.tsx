import { Header } from '@components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

import * as C from './styles'

export function DefaultLayout() {
  return (
    <C.MainContent>
      <Header />
      <Outlet />
    </C.MainContent>
  )
}
