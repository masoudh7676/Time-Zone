import { useRoutes } from 'react-router-dom'
import './App.css'
import AllProductsContext from './Context/Products'
import routes from './router'
import { useState, useEffect } from 'react'
import watchData from './watchsData'
import { ThemeProvider } from './Context/ThemeContext'

function App() {
  const router = useRoutes(routes)
  const [items, SetItems] = useState(watchData)
  const [showCart, setShowCart] = useState(false)
  const [userCart, setUserCart] = useState(() => {
    const savedCart = localStorage.getItem('userCart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('userCart', JSON.stringify(userCart))
  }, [userCart])

  return (
    <ThemeProvider>
      <AllProductsContext.Provider value={{
        items,
        SetItems,
        showCart,
        setShowCart,
        userCart,
        setUserCart,
      }}>
        {router}
      </AllProductsContext.Provider>
    </ThemeProvider>
  )
}

export default App
