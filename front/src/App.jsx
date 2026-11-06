import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Jogo from './Pages/Jogo'
import Partida from './Pages/Partida'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>

<Routes>

<Route path='/' element={<Jogo/>} />
<Route  path='/Partida' element={<Partida/>}  />


</Routes>


<Footer/>
    </>
  )
}

export default App
