import React, { useEffect, useState } from 'react';

import { useGapManager } from './features/gapManager';
import { Agent } from './interfaces/agent.interface';
import { agentRepository } from './repository/agent';

function App() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [viewAgents, setView] = useState<Agent[]>([])
  const [searchValue, setSearchValue] = useState<number>(0)
  const { viewGap, moreGap, lessGap } = useGapManager()

  const sortIncomeDesc = (a: Agent, b: Agent) => Math.sign(a.income + b.income)
  const sortIncomeAsc = (a: Agent, b: Agent) => Math.sign(a.income - b.income)
  const sortIncome = () => {
    // const sortAlgt = [sortIncomeAsc, sortIncomeDesc]

    // current++;

    const temp = [...viewAgents]
    temp?.sort(sortIncomeAsc);

    setView(temp)
  }

  const searchAgents = () => {
    const filteredAgents = agents?.filter((agent) => {
      const diff = Math.abs(agent.income - searchValue)

      return diff < 10000
    })

    setView(filteredAgents)
  }

  const updateSearch = (event: any) => {
    if (
      !isNaN(+event.target.value) &&
      event.target.value.length === 5
    ) {
      setSearchValue(+event.target.value)
    }
  }

  useEffect(() => {
    agentRepository.getAgents()
      .then(setAgents)
  }, [])

  return (
    <div className="App">
      <h1>Agent Me</h1>

      <input type="number" onChange={updateSearch} />
      <button onClick={searchAgents}>Match</button>

      <button onClick={sortIncome}>sort by income</button>

      <div className="agents-table">
        <div className="agents-entity">
          { viewAgents?.length
            ? viewAgents.slice(0, viewGap).map((agent) =>
              <div key={agent.id}>{agent.name} - {agent.income}</div>
            )
            : <p>No available Agents based on your income. Please try a different income value.</p>
          }
        </div>
      </div>

      {
        viewAgents &&
        <div>
          <button onClick={moreGap}>See more</button>
          { viewGap > 3 && <button onClick={lessGap}>See less</button> }
        </div>
      }
    </div>
  );
}

export default App;
