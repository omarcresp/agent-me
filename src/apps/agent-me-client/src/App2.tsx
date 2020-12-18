import React, { useState } from 'react';

import { useGapManager } from './features/gapManager';
import { useAgents } from './features/agentManager';

function App() {
  const [searchValue, setSearchValue] = useState<number>(0)
  const { viewGap, moreGap, lessGap } = useGapManager()
  const { viewAgents, searchAgents } = useAgents()
  // const wrapSearchAgents = () => searchAgents(searchValue)

  const updateSearch = (event: any) => {
    if (event.target.value.length === 5)
      setSearchValue(+event.target.value)
  }

  return (
    <div className="App">
      <h1>Agent Me</h1>

      <input type="number" onChange={updateSearch} v-model="" />
      <button>Match</button>

      <div className="agents-table">
        <div className="agents-entity">
          { viewAgents?.length
            // TODO: Mover a componente
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
