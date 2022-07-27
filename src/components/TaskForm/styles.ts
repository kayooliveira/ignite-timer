import styled from 'styled-components'

export const TaskForm = styled.form`
  width: 100%;
  max-width: 40.625rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TaskFormHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const TaskFormInput = styled.input`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.placeholder};
  background: transparent;
  border: none;
  border-bottom: 0.125rem solid ${({ theme }) => theme.colors.placeholder};
  padding: 0.6875rem 0.5rem;
  transition: border-color 0.2s;

  &:focus {
    box-shadow: none;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    &::placeholder {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &::placeholder {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.placeholder};
  }
`

export const TaskMinutesAmount = styled(TaskFormInput)`
  width: 4rem;
`

export const TaskTitleInput = styled(TaskFormInput)`
  flex: 1;
`

export const TaskFormSpan = styled.span`
  display: block;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  line-height: 160%;
`

export const TaskFormButton = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  border: none;
  gap: 0.5rem;
  transition: color, background-color 0.2s;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`
