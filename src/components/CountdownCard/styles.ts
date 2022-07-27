import styled from 'styled-components'

export const CountdownCard = styled.div`
  display: block;
  padding: 2.5rem 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.card};
  font-size: 10rem;
  font-style: normal;
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  line-height: calc(8rem - 0.5rem);
`
