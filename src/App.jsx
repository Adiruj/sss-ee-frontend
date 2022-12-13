import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Partlist from './page/partlist';
import Estimatecost from './page/Estimatecost'
import Followup from './page/Followup'
import Auth from './auth/Auth'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/partlist' element={<Partlist/>} />
        <Route path='/estimatecost' element={<Estimatecost/>} />
        <Route path='/followup' element={<Followup/>} />
        <Route path='auth' element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App
