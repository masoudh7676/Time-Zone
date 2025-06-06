import { Navigate } from 'react-router-dom';
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import User from './Components/User/SignIn/User';
import Signup from './Components/User/SignUp/Signup';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';

const routes = [
  { path: '/', element: <Navigate to="/home" /> },
  {
    element: <MainLayout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/user', element: <User /> },
      { path: '/signup', element: <Signup /> },
      { path: '/cart', element: <Cart /> },
      { path: '/product/:id', element: <Product /> }
    ]
  }
];

export default routes;
