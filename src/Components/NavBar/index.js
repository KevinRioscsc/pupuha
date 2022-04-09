import React from 'react'
import pupu from '../Images/pupu.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <footer>
            <div className="left-side">
                <img src={pupu} alt="pupusa" height= {50} />
                <h1>PUPUHA-VOS</h1>
            </div>
        </footer>
    </div>
  )
}

export default NavBar