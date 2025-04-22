import { Navigate } from 'react-router-dom'; // Import Navigate for redirection
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Blog from './Components/Blog/Blog'
import User from './Components/User/SignIn/User';
import Signup from './Components/User/SignUp/Signup';
const routes = [
    {path: '/', element: <Navigate to="/home" />}, // Redirect '/' to '/home'
    {path: '/home', element: <Home />},
    {path:'/shop', element: <Shop />},
    {path:'/about', element:<About />},
    {path:'/contact', element: <Contact />},
    {path:'/blog', element: <Blog />},
    {path: '/user', element: <User/>},
    {path: 'signup', element: <Signup/>}
]

export default routes