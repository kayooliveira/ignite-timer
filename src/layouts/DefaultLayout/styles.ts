import styled from 'styled-components'

export const MainContent = styled.main`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  border-radius: 8px;
  margin: 5rem auto;
  background-color: ${({ theme }) => theme.colors.elements};
  padding: 2.5rem;
`
