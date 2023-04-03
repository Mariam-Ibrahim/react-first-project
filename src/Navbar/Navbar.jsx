import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import './Navbar.css'
export default function Navbar() {
  return (

<nav className="navbar navbar-expand-lg mybackground  ">
  <div className="container p-3">
    <Link className="navbar-brand text-light fw-bold fs-4 ps-5" >START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
        <li className="nav-item">
          <Link className="nav-link active  p-4 fw-bold" aria-current="page" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  p-4 fw-bold " to="about" >ABOUT</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link  p-4 fw-bold" to="contact" >CONTACT</Link>
        </li>
</ul>
    </div>
  </div>
</nav>

  )
}
