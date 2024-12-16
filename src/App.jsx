import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu';
import Home from './paginas/Home';
import Especialidades from './paginas/Especialidades';
import Talleres from './paginas/Talleres';
import Estudios from './paginas/Estudios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/especialidades' element={<Especialidades/>} />
          <Route path='/talleres' element={<Talleres/>} />
          <Route path='/estudios' element={<Estudios/>} />

        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
