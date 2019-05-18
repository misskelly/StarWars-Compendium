import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <nav className="nav-left">
        <ul className="nav-left-ul">
          <li className="main-menu-li">
            <a className="main-menu-link" href="#">
              Home
            </a>
          </li>
          <li className="main-menu-li">
            <a className="main-menu-link" href="www.instagram.com">
              Learn More
            </a>
          </li>
          <li className="main-menu-li">
            <a className="main-menu-link" href="www.instagram.com">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <h1 className='main-heading'>A <span className='sw-heading'>StarWars</span>Compendium</h1>
      <nav className='nav-right'>
        <ul className='nav-right-ul'>
          <li className="collections-menu-li">
            <a href="www.instagram.com" className="collections-menu-link">
              Planets
            </a>
          </li>
          <li className="collections-menu-li">
            <a href="www.instagram.com" className="collections-menu-link">
              People
            </a>
          </li>
          <li className="collections-menu-li">
            <a href="www.instagram.com" className="collections-menu-link">
              Vehicles
            </a>
          </li>
          <li className="collections-menu-li">
            <a href="www.instagram.com" className="collections-menu-link">
              Favorites
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default Header;