import React from 'react'

import { Agent } from '../../../../../core/interfaces/agent.interface'
import { avatar } from '../../../../../assets/images'
import {
  AgentCardContainer,
  AgentCardFooter,
  AgentCardImage,
  AgentCardIncome,
  AgentCardName,
  AgentCardInfo,
} from './AgentCard.styled'
import { formatCurrency } from '../../formatters/formatCurrency'

interface Props {
  agent: Agent;
}

function AgentCard({ agent }: Props) {
  return (
    <AgentCardContainer>
      <AgentCardImage src={avatar}></AgentCardImage>

      <AgentCardInfo>
        <AgentCardName>{ agent.name }</AgentCardName>
        <span>ID: { agent.id }</span>
        <AgentCardFooter>
          Income:
          <AgentCardIncome>${ formatCurrency(agent.income) }</AgentCardIncome>
        </AgentCardFooter>
      </AgentCardInfo>
    </AgentCardContainer>
  )
}

export default AgentCard
