import { NavLink as NavLinkBase } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  transition: border 0.2s;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    border-radius: 4px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`
