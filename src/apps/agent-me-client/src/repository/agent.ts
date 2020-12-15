export const agentRepository = {
  getAgents() {
    return fetch('/agents.json').then((response) => response.json())
  }
}
