import React from 'react'
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <>
      <h4>Contacto</h4>
      <nav>
        <ul>
          <li>
            <Link to='/contact/1'>Exibir contato do Raylan</Link>
          </li>
          <li>
            <Link to='/contact/2'>Exibir contato do Dirceu</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Contact