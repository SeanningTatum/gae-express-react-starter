import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Router>
      <Route to="/" component={LandingPage} />
    </Router>
  )
}

export default App
