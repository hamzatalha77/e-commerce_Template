import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import home from './layouts/home'
const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" Component={home} />
    </Router>
  )
}

export default App
