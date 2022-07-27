import { NavLink as NavLinkBase } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem;
`

export const Logo = styled.img`
  height: 2.5rem;
`

export const NavLinks = styled.nav`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`

export const NavLink = styled(NavLinkBase)`
  color: ${({ theme }) => theme.colors.title};
  padding: 0.75rem;

  &:focus {
    border-radius: 0.25rem;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`
