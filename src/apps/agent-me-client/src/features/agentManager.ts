import { useEffect, useState } from 'react'

import { Agent } from '../../../../core/interfaces/agent.interface'
import { agentRepository } from '../repository/AgentRepository'

const amountRequiredLength = 5;

export function validateSearchValue(searchValue: string) {
  const isInvalidNumber = isNaN(+searchValue) && 'valueNumber';
  const notRequiredLength = searchValue.length !== amountRequiredLength && 'valueLength';

  return isInvalidNumber || notRequiredLength;
}

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [viewAgents, setView] = useState<Agent[]>([])

  const searchAgents = (searchValue: string) => {
    const searchValueError = validateSearchValue(searchValue)

    if (searchValueError) {
      return searchValueError;
    }

    const filteredAgents = agents.filter((agent) => Math.abs(agent.income - +searchValue) < 10000);

    setView(filteredAgents);
  }

  useEffect(() => {
    agentRepository.getAgents()
      .then((response) => {
        setTimeout(() => {
          setAgents(response.data)
        }, 1000)
      })
  }, [])

  return { searchAgents, viewAgents, setView, agents }
}
