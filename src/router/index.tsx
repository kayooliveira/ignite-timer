import { History } from '@pages/History'
import { Home } from '@pages/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/historico" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
