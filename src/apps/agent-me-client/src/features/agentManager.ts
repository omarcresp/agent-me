import { useEffect, useState } from "react"

import { Agent } from "../../../../core/interfaces/agent.interface"
import { agentRepository } from "../repository/AgentRepository"

const filterAgents = (income: number, searchValue: number) => {
  const diff = Math.abs(income - searchValue)

  return diff <= 10000
}

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [viewAgents, setView] = useState<Agent[]>([])

  const searchAgents = (searchValue: number) => {
    const filteredAgents = agents?.filter((agent) => filterAgents(agent.income, searchValue))

    setView(filteredAgents)
  }

  useEffect(() => {
    agentRepository.getAgents()
      .then((response) => setAgents(response.data))
  }, [])

  return { searchAgents, viewAgents }
}
