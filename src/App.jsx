import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import UserDetail from './pages/user-detail/user-detail'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user-detail/:id' element={<UserDetail/>}/>
    </Routes>
    </>
  )
}

export default App