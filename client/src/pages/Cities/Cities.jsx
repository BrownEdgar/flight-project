import React from 'react'
import { useLoaderData, useOutletContext } from 'react-router-dom'
import CTable from '../../components/CTable/CityTable'
import axios from 'axios';

import './Cities.scss'

export default function Cities() {
  const data = useLoaderData();
  const { isOpen, toggleModal } = useOutletContext()
  console.log(data)
  return (
    <div className='Cities'>
      <h1 className='Cities__title'>Cities</h1>
      <div className="Cities__header">
        <button className="btn btn__green" role='button' onClick={toggleModal}>
          add City
        </button>
      </div>
      <CTable data={data} />
    </div>
  )
}

export const citiesLoader = async () => {
  console.log("111")
  const response = await axios(import.meta.env.VITE_DB_URL + '/cities');
  return response.data
}