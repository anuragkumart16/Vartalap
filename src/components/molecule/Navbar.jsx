import React from 'react'

function Navbar() {
  return (
    <header>
        <div>
            Logo
        </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <a href="/chat">click here</a>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
