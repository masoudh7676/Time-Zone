import { useRoutes } from 'react-router-dom'
import './App.css'
import AllProductsContext from './Context/Products'
import routes from './router'
import { useState } from 'react'
import watchData from './watchsData'
import { ThemeProvider } from 'next-themes'
function App() {
  const router = useRoutes(routes)
  const [items,SetItems] = useState(watchData)
  const [cart, setCart] = useState(false)
  return (
    
      <>
      <AllProductsContext.Provider value= {{
        items,
        cart
      }}>
      {router}
      </AllProductsContext.Provider>
      </>
  )
}

export default App
