import React, { createContext, ReactNode, useMemo } from 'react';
import { useAgents } from '../features/agentManager';
import { Agent } from '../../../../core/interfaces/agent.interface';

interface AgentsContext {
  viewAgents: Agent[],
  agents: Agent[],
  setView: React.Dispatch<React.SetStateAction<Agent[]>>,
  searchAgents: (searchValue: string) => string | void,
}

export const agentsContext = createContext<AgentsContext>({
  viewAgents: [],
  agents: [],
  setView: () => {},
  searchAgents: () => {},
});

interface Props {
  children: ReactNode
}

export const AgentsProvider = ({ children }: Props) => {
  const { searchAgents, viewAgents, setView, agents } = useAgents()
  const value = useMemo<AgentsContext>(() => ({
    searchAgents,
    viewAgents,
    setView,
    agents,
  }), [searchAgents, viewAgents, setView, agents])

  return (
    <agentsContext.Provider value={value}>
      { children }
    </agentsContext.Provider>
  );
};
