import React from 'react'
import './navbar.css'
import logo from './logo.png'

export default function navbar() {
    return (
        <nav class="menu-container">
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>

  <a href="#" class="menu-logo">
    <img src={logo} alt="My Awesome Website"/>
  </a>

  <div class="menu">
    <ul>
      <li>
        <a href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#pricing">
          Competition
        </a>
      </li>
      <li>
        <a href="#blog">
          Instagram
        </a>
      </li>
      <li>
        <a href="#docs">
          Collections
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#signup">
          Sign-up
        </a>
      </li>
      <li>
        <a href="#login">
          Login
        </a>
      </li>
    </ul>
  </div>
</nav>
    )
}
