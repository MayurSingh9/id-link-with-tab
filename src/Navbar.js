import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
         <ul>
        <li>
            <Link to="tab1">Tab1</Link>          
        </li>
        <li>
        <Link to="tab2">Tab2</Link>
        </li>
        <li>            
        <Link to="tab3">Tab3</Link>
        </li>
        <li>            
        <Link to="tab4">Tab4</Link>
        </li>
    </ul>
    </>
  )
}
