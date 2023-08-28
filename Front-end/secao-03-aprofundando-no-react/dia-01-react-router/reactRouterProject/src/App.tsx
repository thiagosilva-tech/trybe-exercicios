import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import CoffeeList from './pages/coffe-list'
import Coffee from './pages/coffe'
import NotFound from './pages/not-found'
import Layout from './components/layout'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="coffees" element={ <CoffeeList /> } />
          <Route path="coffees/:coffee" element={ <Coffee /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </div>
  )
}

export default App
