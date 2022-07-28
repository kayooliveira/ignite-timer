import React from 'react'

import * as C from './styles'

export function History() {
  return (
    <C.HistoryContainer>
      <h1>Meu histórico</h1>
      <C.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>Duração 1</td>
              <td>Início 1</td>
              <td>
                <C.Status statusColor="green">Concluído</C.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>Duração 1</td>
              <td>Início 1</td>
              <td>
                <C.Status statusColor="green">Concluído</C.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>Duração 1</td>
              <td>Início 1</td>
              <td>
                <C.Status statusColor="green">Concluído</C.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>Duração 1</td>
              <td>Início 1</td>
              <td>
                <C.Status statusColor="green">Concluído</C.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>Duração 2</td>
              <td>Início 2</td>
              <td>
                <C.Status statusColor="green">Concluído</C.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 3</td>
              <td>Duração 3</td>
              <td>Início 3</td>
              <td>
                <C.Status statusColor="green">Concluído</C.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 4</td>
              <td>Duração 4</td>
              <td>Início 4</td>
              <td>
                <C.Status statusColor="green">Concluído</C.Status>
              </td>
            </tr>
          </tbody>
        </table>
      </C.HistoryList>
    </C.HistoryContainer>
  )
}
