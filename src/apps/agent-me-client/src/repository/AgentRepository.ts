import Client from './clients/agentMeClient'
import { Agent } from '../../../../core/interfaces/agent.interface'

const url = '/agents'

export const agentRepository = {
  getAgents() {
    return Client.get<Agent[]>(url)
  }
}
