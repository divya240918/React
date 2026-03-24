import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Layout from './Layout.jsx'
import Login from './components/Login.jsx'
import Cart from './components/Cart.jsx'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='body' element={<Body />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  )
)


// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// )
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />

    </CartProvider>
  </React.StrictMode>
)