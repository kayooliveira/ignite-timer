import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export const MainContent = styled.main`
  width: 70rem;
  height: calc(100vh - 5rem);
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.elements};
  display: flex;
  flex-direction: column;
  align-items: center;
`
