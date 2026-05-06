import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/characters">Characters</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
  )
}

export default Nav