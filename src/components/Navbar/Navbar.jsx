import React from 'react'

const Navbar = () => {
  return (
    <div>

       {/* <!-- Header / Navbar --> */}
    <header>
      <nav className="navbar">
        <a href="#" className="nav-logo">
          <h2 className="logo-text"> Shri Krishna construction Company </h2>
        </a>

        <ul className="nav-menu">
          <button id="menu-close-button" className="fas fa-times"></button>

          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About </a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link">Performance</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">Machinery and Workflow</a>
          </li>
          <li className="nav-item">
            <a href="#certificates" className="nav-link">Company Info</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Maintainance & Security</a>
          </li>
          <li className="nav-item">
            <a href="#experiance" className="nav-link">Use Case</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>

    
    </div>
  )
}

export default Navbar
