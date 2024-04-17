import React, { useEffect } from 'react'
import './Modal.scss'

export default function Modal({ isOpen, toggleModal, children }) {

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.className === 'Modal') {
        toggleModal()
      }
    }
    window.addEventListener('click', handleClick)
    return () => {
      console.log('the end')
      window.removeEventListener('click', handleClick)
    }
  }, [isOpen])

  if (!isOpen) {
    return null;
  }

  return (
    <div className='Modal'>
      <div className="Modal__content">
        {children}
      </div>
    </div>
  )
}
