import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import routes from './router'
function App() {
  const router = useRoutes(routes)
  return (
      <>
              <NavBar/>
      {router}
      </>
  )
}

export default App
