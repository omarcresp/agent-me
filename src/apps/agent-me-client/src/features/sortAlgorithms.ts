import { Agent } from '../../../../core/interfaces/agent.interface';

export const sortAlgorithms = {
  name: (a, b) => a.name.localeCompare(b.name),
  incomeLow: (a, b) => Math.sign(a.income - b.income),
  incomeHigh: (a, b) => Math.sign(b.income - a.income),
  id: (a, b) => Math.sign(a.id - b.id),
} as { [key: string]: (a: Agent, b: Agent) => number }
