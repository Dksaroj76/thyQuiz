import React from 'react'
import Headroom from 'headroom.js'
import { Link } from 'react-router-dom'
import './Header.css'
import { useEffect } from 'react'

const Header = () => {

  useEffect(() => {
    var header = document.querySelector("header");
    var headroom = new Headroom(header,{tolerance:10});
    headroom.init();
  }, [])


  return <>
    <header>
      <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/create'>Create A Quiz</Link>
        <Link to='/about'>About</Link>
      </div>
    </header>
  </>
}

export default Header