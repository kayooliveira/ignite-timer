import styled from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  max-height: 100%;

  h1 {
    font-size: 1.5rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 40.625rem;
    th {
      padding: 1rem;
      line-height: 1.6;
      font-size: 0.875rem;
      font-weight: 700;
      text-align: left;
      font-family: 'Roboto';
      color: ${({ theme }) => theme.colors.title};
      background-color: ${({ theme }) => theme.colors.divider};
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
        width: 50%;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      padding: 1rem;
      line-height: 1.6;
      font-size: 0.875rem;
      font-weight: 700;
      text-align: left;
      font-family: 'Roboto';
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.card};
      border-top: 4px solid ${({ theme }) => theme.colors.elements};

      &:first-child {
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

enum StatusColors {
  'yellow' = 'yellow-500',
  'green' = 'green-500',
  'red' = 'red-500',
}

interface StatusProps {
  statusColor: keyof typeof StatusColors
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &::before {
    content: '';
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: ${({ statusColor, theme }) =>
      theme.colors[StatusColors[statusColor]]};
  }
`
