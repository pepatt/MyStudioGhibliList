import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cards from './components/Cards/Cards'
import Login from './components/Login/Login'

function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element = {<Cards />} />
        <Route path='/login' element = {<Login />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
