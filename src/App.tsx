import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cards from './components/Cards/Cards'
import Home from './pages/Home/Home'

function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/ghibli' element = {<Cards />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
