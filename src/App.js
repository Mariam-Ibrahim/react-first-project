import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Intropage from './Intropage/Intropage'
import Layout from './Layout/Layout'
import Navbar from './Navbar/Navbar'
import Portfolio from './Portfolio/Portfolio'




export default function App() {
  let Path=createBrowserRouter([
    {path:'' , element:<Layout/> , children: [
      {index:true , element:<Intropage/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"*" , element:<Intropage/>}
    ]}
  ])
  return (
    <RouterProvider router={Path}/>
)
}
