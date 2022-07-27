import styled from 'styled-components'

export const CountdownSeparator = styled.div`
  border-radius: 0.5rem;
  line-height: calc(8rem - 0.5rem);
  font-size: 10rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  color: ${({ theme }) => theme.colors.primary};
`
