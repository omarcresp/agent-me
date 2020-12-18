import { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import AgentCard from '../components/AgentCard/AgentCard'
import { AgentCardGrid } from '../components/AgentCard/AgentCard.styled'
import { AgentListEmpty } from '../components/AgentListEmpty/AgentListEmpty'
import { AgentsListHeader } from '../components/AgentsListHeader/AgentsListHeader'
import { GapControllerButton, GapGridContainer } from '../components/GapControllers/GapControllers'
import { HeaderTitle } from '../components/HeaderTitle/HeaderTitle'
import SortControllers from '../components/SortControllers/SortControllers'
import { agentsContext } from '../context/AgentsProvider'
import { useGapManager } from '../features/gapManager'
import { sortAlgorithms } from '../features/sortAlgorithms'
import { formatCurrency } from '../formatters/formatCurrency'

function AgentsPage() {
  const history = useHistory()
  const { searchAgents, viewAgents, setView, agents } = useContext(agentsContext)
  const { searchValue } = useParams<{searchValue: string}>()
  const { viewGap, moreGap, lessGap } = useGapManager()

  const sortView = (sortMethod: string) => {
    const shallowAgents = [...viewAgents]
    const sortAlgorithm = sortAlgorithms[sortMethod]

    shallowAgents.sort(sortAlgorithm)

    setView(shallowAgents);
  }

  useEffect(() => {
    const error = searchAgents(searchValue)

    if (error) {
      history.push(`/?error=${error}`)
    }
  }, [agents, searchValue, history])


  return (
    <div>
      <AgentsListHeader>
        <HeaderTitle>Your matches</HeaderTitle>
        <span className="header-income-label">Your income:</span>
        <span className="header-income-value">${formatCurrency(+searchValue)}</span>
      </AgentsListHeader>

      {
        viewAgents.length
         ? (
          <AgentCardGrid>
            <SortControllers onInput={sortView} />

            { viewAgents.slice(0, viewGap).map(agent => <AgentCard key={agent.id} agent={agent} />) }

            <GapGridContainer>
              <GapControllerButton disabled={viewGap === 3} onClick={lessGap}>
                <span>Show Less</span>
                <span>-</span>
              </GapControllerButton>

              <GapControllerButton disabled={viewGap > viewAgents.length} onClick={moreGap}>
                <span>Show More</span>
                <span>+</span>
              </GapControllerButton>
            </GapGridContainer>
          </AgentCardGrid>
         )
        : <AgentListEmpty>No available Agents based on your income. Please try a different income value.</AgentListEmpty>
      }
    </div>
  )
}

export default AgentsPage
