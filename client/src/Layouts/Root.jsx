import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './Root.scss'

export default function Root() {
  return (
    <div className='Root'>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>

      <footer>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, minima.©
      </footer>
    </div>
  )
}
