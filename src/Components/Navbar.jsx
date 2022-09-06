import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
    <nav>
        <ul className='nav-ul'>
            <li><NavLink className='link p-1' to='/'>Home</NavLink></li>
            <li><NavLink className='link p-1' to='/about'>About</NavLink></li>
            <li><NavLink className='link p-1' to='/contact'>Contact</NavLink></li>
            <li><Link className='link p-1' to='/book-list'>BookList</Link></li>
        </ul>
    </nav>
   </>
  )
}
