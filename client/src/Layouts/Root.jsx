import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './Root.scss'
import Modal from '../components/Modal/Modal';
import CityForm from '../components/CityForm/CityForm';

export default function Root() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)
  return (
    <div className='Root'>
      <Navbar />
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <CityForm toggleModal={toggleModal} />
      </Modal>
      <div className='container'>
        <Outlet context={{ isOpen: isOpen, toggleModal }} />
      </div>

      <footer>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, minima.©
      </footer>
    </div>
  )
}
