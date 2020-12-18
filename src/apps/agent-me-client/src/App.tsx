import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import AppRouter from './routes'
import { AgentsProvider } from './context/AgentsProvider'

const history = createBrowserHistory()

function App() {
  return (
    <div>
      <AgentsProvider>
        <Router history={history}>
          <AppRouter />
        </Router>
      </AgentsProvider>
    </div>
  )
}

export default App
