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
  const [showCart, setShowCart] = useState(false)
  const [userCart, setUserCart] = useState([])
  return (
    
      <>
      <AllProductsContext.Provider value= {{
        items,
        SetItems,
        showCart,
        setShowCart,
        userCart,
        setUserCart
      }}>
      {router}
      </AllProductsContext.Provider>
      </>
  )
}

export default App
