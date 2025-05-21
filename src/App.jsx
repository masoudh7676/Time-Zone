import { useRoutes } from 'react-router-dom'
import './App.css'
import AllProductsContext from './Context/Products'
import routes from './router'
import { useState } from 'react'
import watchData from './watchsData'
import { ThemeProvider } from './Context/ThemeContext'
import ScrollProgress from './Components/ScrollProgress/ScrollProgress'
function App() {
  const router = useRoutes(routes)
  const [items,SetItems] = useState(watchData)
  const [showCart, setShowCart] = useState(false)
  const [userCart, setUserCart] = useState([])
  return (
    <ThemeProvider>
    <ScrollProgress/>
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
    </ThemeProvider>
  )
}

export default App
