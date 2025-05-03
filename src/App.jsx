import { useRoutes } from 'react-router-dom'
import './App.css'
import AllProductsContext from './Context/Products'
import routes from './router'
import { useState } from 'react'
import watchData from './watchsData'
function App() {
  const router = useRoutes(routes)
  const [items,SetItems] = useState(watchData)
  return (
      <>
      <AllProductsContext.Provider value= {{
        items,
      }}>
      {router}
      </AllProductsContext.Provider>
      </>
  )
}

export default App
