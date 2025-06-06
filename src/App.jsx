import { useRoutes } from 'react-router-dom'
import './App.css'
import AllProductsContext from './Context/Products'
import routes from './router'
import { useState, useEffect } from 'react'
import watchData from './watchsData'
import { ThemeProvider } from './Context/ThemeContext'
import Preloader from './Components/Preloader/Preloader'

function App() {
  const router = useRoutes(routes)
  const [items, SetItems] = useState(watchData)
  const [showCart, setShowCart] = useState(false)
  const [userCart, setUserCart] = useState(() => {
    const savedCart = localStorage.getItem('userCart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem('userCart', JSON.stringify(userCart))
  }, [userCart])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

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
